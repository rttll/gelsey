<template>
  <Layout>
    <header class="p-4">
      <Heading>
        Events
      </Heading>
    </header>
    <section class="p-4 pt-10">
      <article
        v-for="event in currentEvents"
        class=""
        :key="event.id"
        class="flex mb-20 space-x-10 border-b border-gray-400 pb-9"
      >
        <div class="w-1/3 space-y-2">
          <header>
            <h3 class="font-semibold text-gray-600 uppercase">
              {{ event.title }}
            </h3>
            <p>{{ event.date_display }}</p>
          </header>
          <div class="space-y-4 text-sm" v-if="event.address">
            <h4 class="font-semibold">
              {{ event.address.name }}
            </h4>
            <span v-for="part in ['street', 'city', 'state', 'zip']">
              <span v-if="event.address[part]" class="block text-sm">
                {{ event.address[part] }}
              </span>
            </span>
            <a
              :href="event.address.link"
              v-if="event.address.link"
              class="text-xs text-gray-400"
            >
              {{ event.address.link }}
            </a>
          </div>
        </div>
        <div
          class="text-sm leading-loose md:w-2/3"
          v-if="event._rawDescription"
        >
          <BlockContent :blocks="event._rawDescription" />
        </div>
      </article>
    </section>
    <section class="p-4 pb-20 space-y-8">
      <article v-for="(group, i) in pastEvents" :key="i" class="">
        <div v-for="(events, year) in group" :key="year">
          <h3 class="text-2xl font-semibold">{{ year }}</h3>
          <ul>
            <li
              v-for="event in events"
              class="flex space-x-1 overflow-hidden text-sm whitespace-nowrap"
            >
              <span>{{ event.date }} &bull; </span>
              <span>{{ event.title }} &bull; </span>
              <span v-if="event.address" class="flex space-x-1">
                <span>{{ event.address.name }}, </span>
                <span>{{ event.address.line1 }}, </span>
                <span>{{ event.address.line2 }}, </span>
              </span>
            </li>
          </ul>
        </div>
      </article>
    </section>

    <section class="p-4 pb-20 space-y-8">
      <article v-for="(group, i) in archives" :key="i" class="">
        <div v-for="(archive, year) in group" :key="year">
          <h3 class="text-2xl font-semibold">{{ year }}</h3>
          <ul>
            <li
              v-for="data in archive"
              class="flex space-x-1 overflow-hidden text-sm leading-relaxed whitespace-nowrap"
            >
              <span v-html="data.text"></span>
            </li>
          </ul>
        </div>
      </article>
    </section>
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
          _rawDescription(resolveReferences: {maxDepth: 5})
          address {
            name 
            link 
            line1
            line2
            line3
          }
        }
      }
    } 
    archives: allSanityEventArchive {
      edges {
        node {
          id
          text
          year
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
  methods: {
    setArchives() {
      let archives = this.$page.archives.edges.map(({ node }) => node);
      let ids = archives.map(({ id }) => id).join(' ');
      window.ids = ids;
      let years = [];
      archives.forEach((obj) => {
        if (!years.includes(obj.year)) years.push(obj.year);
      });

      for (let year of years) {
        let batch = archives.filter((node) => node.year === year);
        this.archives.unshift({ [year]: batch });
      }
      this.archives = this.archives
        .sort((a, b) => {
          let aYear = parseInt(Object.keys(a)[0]);
          let bYear = parseInt(Object.keys(b)[0]);
          return aYear - bYear;
        })
        .reverse();
    },
  },
  created() {
    this.setArchives();

    let nodes = this.$page.events.edges.map(({ node }) => {
      if (node.address) {
        node.address = node.address[0];
      }
      return node;
    });

    let current = nodes.filter((node) => {
      let eventDate = new Date(node.date);
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow < eventDate;
    });
    this.currentEvents = current;

    let past = nodes
      .filter((node) => {
        let eventDate = new Date(node.date);
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
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
      });

    if (past.length === 0) return;

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
