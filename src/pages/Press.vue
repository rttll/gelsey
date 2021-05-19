<template>
  <Layout>
    <header class="p-4">
      <Heading>
        Press
      </Heading>
    </header>

    <section class="p-4 my-4 border-t border-gray-300 border-wb">
      <p class="flex justify-end">
        <a
          class="flex items-center text-xs"
          href="#"
          @click="showQuotes = !showQuotes"
        >
          <span>{{ showQuotes ? 'Hide Quotes' : 'Show Quotes' }}</span>
          <ChevronUp v-if="showQuotes" class="p-1" />
          <ChevronDown v-else class="p-1" />
        </a>
      </p>
      <transition name="slide-down">
        <div
          v-if="showQuotes"
          class="flex flex-col items-center justify-center space-y-20"
        >
          <blockquote
            v-for="quote in quotes"
            :key="quote.id"
            class="px-4 py-10 text-center md:w-1/2 md:px-0"
          >
            <BlockContent :blocks="quote._rawQuote" />
            <div class="flex justify-end">
              <cite> &mdash; {{ quote.cite }}</cite>
            </div>
          </blockquote>
        </div>
      </transition>
    </section>

    <section class="flex flex-col md:flex-row md:-ml-4">
      <article v-for="col in grid" class="w-full px-8 md:w-1/4">
        <div v-for="project in col" class="py-8 border-b border-gray-300">
          <h3 class="pb-2 font-semibold text-gray-600 uppercase">
            {{ project.title }}
          </h3>
          <ul>
            <li v-for="article in project.articles">
              <a
                class="block py-1 space-x-2 font-normal text-gray-500 cursor-pointer hover:underline"
                :href="article.href"
              >
                <span>{{ article.text }}</span>
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  </Layout>
</template>

<page-query>
  query {
    presses: allSanityPress(sort: [{order: ASC}]) {
      edges {
        node {
          id
          title 
          articles {
            _key
            text 
            href
          }
        }
      }
    }
    quotes: allSanityQuotes(sort: [{order: ASC}]) {
      edges {
        node {
          id
          cite
          _rawQuote
        }
      }
    }
  }
</page-query>

<script>
export default {
  name: 'Press',
  data() {
    return {
      projects: [],
      quotes: [],
      showQuotes: false,
    };
  },
  computed: {
    grid() {
      let arr = [];
      let cols = [0, 1, 2, 3];
      let perCol = Math.floor(this.projects.length / 4);
      let remainder = this.projects.length - cols.length * perCol;
      for (let i of cols) {
        let from = i * perCol;
        let to = i * perCol + perCol;
        // Distribute remaining projects to last columns
        if (i >= remainder) {
          to += remainder / (cols.length - i);
        }
        arr.push(this.projects.slice(from, to));
      }
      return arr;
    },
  },
  mounted() {
    this.projects = this.$page.presses.edges.map((obj) => obj.node);
    this.quotes = this.$page.quotes.edges.map((obj) => obj.node);
  },
};
</script>
