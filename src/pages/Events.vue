<template>
  <Layout>
    <Container>
      <header class="p-4">
        <Heading :display="true">
          Events
        </Heading>
      </header>
      <section class="p-4 pt-10">
        <article v-for="event in currentEvents" class="" :key="event.id">
          <header>
            <h3
              class="pb-2 mb-6 text-lg font-semibold text-gray-600 uppercase border-b border-gray-200"
            >
              {{ event.title }}
            </h3>
          </header>
          <div class="flex mb-20 space-x-10 pb-9">
            <div class="w-1/3 space-y-2">
              <p>{{ event.date_display }}</p>
              <span
                v-if="event.ongoing"
                class="inline-block px-3 text-xs text-white bg-gray-700 rounded-full"
                style="padding-top: 2px; padding-bottom: 2px"
              >
                ongoing
              </span>
              <div class="space-y-4 text-sm" v-if="event.address">
                <h4 class="font-semibold">
                  {{ event.address.name }}
                </h4>
                <a
                  :href="event.address.link"
                  v-if="event.address.link"
                  class="text-xs text-gray-400"
                >
                  {{ event.address.link }}
                </a>
                <BlockContent
                  v-if="event.address._rawAddress"
                  class="text-sm"
                  :blocks="event.address._rawAddress" />
              </div>
            </div>
            <div
              class="text-sm leading-loose md:w-2/3"
              v-if="event._rawDescription"
            >
              <BlockContent :blocks="event._rawDescription" />
            </div>
          </div>
        </article>
      </section>

      <header class="p-4">
        <Heading :display="true">
          Past Events
        </Heading>
      </header>

      <!-- Past shows -->
      <section class="p-4 pb-0 space-y-8">
        <article v-for="(group, i) in pastEvents" :key="i" class="">
          <div v-for="(events, year) in group" :key="year">
            <h3 class="text-2xl font-semibold">{{ year }}</h3>
            <ul>
              <li
                v-for="event in events"
                class="flex space-x-1 overflow-hidden text-sm whitespace-nowrap"
              >
                <span>{{ event.date }} &bull; </span>
                <span class="italic">{{ event.title }}</span>
                <span v-if="event.address && event.address.short_address">
                  &bull; {{ event.address.short_address }}
                </span>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <!-- Imported Archives (before 2021) -->
      <section class="p-4 pb-20 text-sm">
        <article v-for="archive in archives" :key="archive.id" class="">
          <h3 class="text-2xl font-semibold">{{ archive.year }}</h3>
          <BlockContent :blocks="archive._rawShows" />
        </article>
      </section>
    </Container>
  </Layout>
</template>

<page-query>
  query {
    events: allSanityEvent(sortBy: "date", order: ASC) {
      edges {
        node {
          id
          title 
          link 
          date_display
          date
          end_date
          ongoing
          _rawDescription(resolveReferences: {maxDepth: 5})
          address {
            name
            link
            short_address
            _rawAddress(resolveReferences: {maxDepth: 5})
          }
        }
      }
    } 
    archives: allSanityEventArchive(sortBy: "year", order: DESC) {
      edges {
        node {
          id
          year
          _rawShows
        }
      }
    } 
  }
</page-query>

<script>
export default {
  name: 'Events',
  data() {
    return {
      currentEvents: [],
      pastEvents: [],
      archives: [],
    };
  },
  created() {
    this.archives = this.$page.archives.edges.map(({ node }) => node);
    const nodes = this.$page.events.edges.map(({ node }) => node);
    const tomorrow = new Date().setDate(new Date().getDate() + 1);

    let current = nodes.filter((node) => {
      let eventDate = new Date(node.end_date || node.date);
      return tomorrow < eventDate || node.ongoing;
    });
    this.currentEvents = current;

    let past = nodes
      .filter((node) => {
        let eventDate = new Date(node.end_date || node.date);
        return tomorrow > eventDate;
      })
      .map((node) => {
        let eventDate = new Date(node.date);
        node.year = eventDate.getFullYear();
        let formatted = new Intl.DateTimeFormat('en-US', {
          dateStyle: 'short',
        }).format(eventDate);
        node.date = formatted.replace(/\//g, '.');
        return node;
      }).reverse()

    if (past.length === 0) return;

    // Group by year
    let years = [];
    past.forEach((element) => {
      if (!years.includes(element.year)) years.push(element.year);
    });
    for (let year of years) {
      let batch = past.filter((node) => node.year === year);
      this.pastEvents.unshift({ [year]: batch });
    }
  },
};
</script>

<style></style>
