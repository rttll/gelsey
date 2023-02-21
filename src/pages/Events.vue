<template>
  <Layout>
    <header class="">
      <Heading :display="true">
        <Container>Events</Container>
      </Heading>
    </header>

    <Container>
      <section class="p-4 pt-10 space-y-8">
        <EventItem
          v-for="event in currentEvents"
          :key="event.id"
          :event="event"
        />
      </section>
    </Container>

    <header class="p-4">
      <Heading :smallDisplay="true">
        <Container>Past Events</Container>
      </Heading>
    </header>

    <Container>
      <!-- Past shows -->
      <section class="p-4 pb-0 space-y-8">
        <article v-for="(group, i) in pastEvents" :key="i" class="">
          <div v-for="(events, year) in group" :key="year">
            <h3 class="text-2xl font-semibold">{{ year }}</h3>
            <ul>
              <li
                v-for="event in events"
                class="flex space-x-1 overflow-hidden whitespace-nowrap"
                style="line-height: 2"
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
import EventItem from '~/components/EventItem.vue';
export default {
  name: 'Events',
  data() {
    return {
      currentEvents: [],
      pastEvents: [],
      archives: [],
    };
  },
  components: { EventItem },
  created() {
    this.archives = this.$page.archives.edges.map(({ node }) => node);
    const nodes = this.$page.events.edges.map(({ node }) => node);
    const tomorrow = new Date().setDate(new Date().getDate() + 1);

    const dateFromNode = (node) => new Date(node.date);

    let allCurrent = nodes.filter(
      (node) => node.ongoing || tomorrow < dateFromNode(node)
    );

    // All current events, w/ ongoing at the end
    this.currentEvents = allCurrent
      .filter((node) => !node.ongoing)
      .concat(
        allCurrent
          .filter((node) => node.ongoing)
          .sort((a, b) => dateFromNode(b) - dateFromNode(a))
      );

    let past = nodes
      .filter((node) => tomorrow > dateFromNode(node))
      .map((node) => {
        let eventDate = new Date(node.date);
        node.year = eventDate.getFullYear();
        let formatted = new Intl.DateTimeFormat('en-US', {
          dateStyle: 'short',
        }).format(eventDate);
        node.date = formatted.replace(/\//g, '.');
        return node;
      });

    if (past.length === 0) return;

    // Group by year
    let years = [];
    past.forEach((element) => {
      if (!years.includes(element.year)) years.push(element.year);
    });
    for (let year of years) {
      let batch = past.filter((node) => node.year === year).reverse();
      this.pastEvents.unshift({ [year]: batch });
    }
  },
};
</script>

<style></style>
