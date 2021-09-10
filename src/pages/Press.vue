<template>
  <Layout>
    <header class="py-4">
      <Heading :display="true">
        <Container>Press</Container>
      </Heading>
    </header>

    <section class="my-4 border-b border-gray-300">
      <div v-if="quotes.length > 0" class="flex flex-col items-center justify-center ">
        <BlockQuote :quote="quotes[0]._rawQuote" :cite="quotes[0].cite" />
      </div>

      <transition name="slide-down">
        <div
          v-if="quotes.length > 0 && showQuotes"
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
      <p class="flex justify-end p-4" v-if="quotes.length > 0">
        <a
          class="flex items-center text-xs"
          href="#"
          @click="showQuotes = !showQuotes"
        >
          <span>{{ showQuotes ? 'Less quotes' : 'More quotes' }}</span>
          <ChevronUp v-if="showQuotes" class="w-6 h-6 p-1" />
          <ChevronDown v-else class="w-6 h-6 p-1" />
        </a>
      </p>
    </section>
    <Container>
      
      <!-- One column on small screens -->
      <section class="flex flex-col md:hidden md:flex-row md:-ml-4">
        <article v-for="project in projects" class="py-8 border-b border-gray-300">
          <PressArticle :project="project" />
        </article>
      </section>
      
      <!-- Distribute on medium up -->
      <section class="flex-col hidden md:flex md:flex-row md:-ml-4">
        <article v-for="col in grid" class="md:px-8 md:w-1/4">
          <div v-for="project in col" class="py-8 border-b border-gray-300">
            <PressArticle :project="project" />
          </div>
        </article>
      </section>
      
    </Container>
  </Layout>
</template>

<page-query>
  query {
    presses: allSanityPress(sort: [{order: ASC}]) {
      edges {
        node {
          id
          title
          order
          articles {
            _key
            text 
            href
          }
        }
      }
    }
    quotes: allSanityQuote(sort: [{order: ASC}]) {
      edges {
        node {
          id
          cite
          order
          _rawQuote
        }
      }
    }
  }
</page-query>

<script>
import BlockQuote from '~/components/BlockQuote';
import PressArticle from '~/components/PressArticle';
export default {
  name: 'Press',
  components: { BlockQuote, PressArticle },
  data() {
    return {
      projects: [],
      quotes: [],
      showQuotes: false,
    };
  },
  computed: {
    grid() {
      let cols = []
      for (let index = 0; index < 4; index++) {
        let matches = this.projects
          .filter( (project, i) => i % 4 === index )
        cols[index] = matches
      }
      return cols
    },
  },
  created() {
    this.projects = this.$page.presses.edges
      .map((obj) => obj.node)
      .sort( (a, b) => a.order - b.order)
    this.quotes = this.$page.quotes.edges
      .map((obj) => obj.node)
      .sort( (a, b) => a.order - b.order)
  },
};
</script>
