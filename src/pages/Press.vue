<template>
  <Layout>
    <header class="p-4">
      <Heading :display="true">
        Press
      </Heading>
    </header>

    <section class="p-4 my-4 border-t border-b border-gray-300 border-wb">
      <div class="flex flex-col items-center justify-center ">
        <BlockQuote :quote="quotes[0]._rawQuote" :cite="quotes[0].cite" />
      </div>

      <transition name="slide-down">
        <div
          v-if="showQuotes"
          :class="`flex flex-col items-center justify-center`"
        >
          <BlockQuote
            v-for="quote in quotes.slice(1)"
            :key="quote.id"
            :quote="quote._rawQuote"
            :cite="quote.cite"
          />
          :quote="quote._rawQuote"
        </div>
      </transition>
      <p class="flex justify-end">
        <a
          class="flex items-center text-xs"
          href="#"
          @click="showQuotes = !showQuotes"
        >
          <span>{{ showQuotes ? 'Less quotes' : 'More quotes' }}</span>
          <ChevronUp v-if="showQuotes" class="p-1" />
          <ChevronDown v-else class="p-1" />
        </a>
      </p>
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
import BlockQuote from '~/components/BlockQuote';
export default {
  name: 'Press',
  components: { BlockQuote },
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
  created() {
    this.projects = this.$page.presses.edges.map((obj) => obj.node);
    this.quotes = this.$page.quotes.edges.map((obj) => obj.node);
  },
};
</script>
