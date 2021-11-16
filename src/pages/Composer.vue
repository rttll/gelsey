<template>
  <Layout>
    <div>
      <Heading :display="true">
        <Container>Composer</Container>
      </Heading>
    </div>
    <div v-if="body" class="py-16">
      <Container>
        <ContentContainer>
          <BlockContent :blocks="body" />
        </ContentContainer>
      </Container>
    </div>
    <header class="my-12">
      <Heading :smallDisplay="true">
        <Container>Works</Container>
      </Heading>
    </header>

    <Container>
      <article v-for="comp in work" class="" :key="comp.id">
        <div class="flex flex-col mb-20 space-y-8 md:space-y-0 md:space-x-10 md:flex-row pb-9">
          <div class="w-full space-y-2 md:w-1/3 ">
            <header>
              <Heading tag="h3">
                {{ comp.title }}
              </Heading>
              <p class="text-lg text-gray-400">{{ comp.year }}</p>
            </header>
          </div>
          <div
            class="w-full space-y-4 text-base leading-loose md:w-2/3 md:pr-20"
            v-if="comp._rawShort_description"
          >
            <BlockContent :blocks="comp._rawShort_description" />
            <div  class="flex justify-end">
              <a v-if="comp.external_link" :href="comp.external_link" class="inline-flex items-center space-x-1">
                <ArrowUpRight />
                More
              </a>
              <g-link v-else :to="comp.slug">More &rarr;</g-link>
            </div>
          </div>
        </div>
      </article>
    </Container>
  </Layout>
</template>

<page-query>

query {
  sanityComposer(id: "composer") {
    _rawBody

  }
  work: allSanityWork(sortBy: "order", order: ASC) {
    edges {
      node {
        id
        order
        title
        year 
        external_link
        _rawShort_description
        _rawDescription
      }
    }
  }
} 
</page-query>

<script>
const { default: ContentContainer }=require("../components/ContentContainer.vue");

export default {
  name: 'Composer',
  data() {
    return {
      body: null,
      work: [],
    };
  },
  created() {
    this.body = this.$page.sanityComposer._rawBody;
    this.work = this.$page.work.edges
      .map((obj) => {
        obj.node.slug =
          this.$route.path + '/' +
          obj.node.title
            .replace(/./g, (match) => {
              return /[a-z|A-Z]/.test(match) ? match.toLowerCase() : '-'
            })

        return obj.node;
      })
      .sort((a, b) => a.order - b.order)
  },
};
</script>

<style>
  #heading-wwrap:after {
    content: '';
    background: rgba(75, 85, 99, 1);
    display: block;
    width: 100%;
    height: 14px;
    position: absolute;
    left: 0;
    bottom: 0;

    /* transform: translateY(14px) */
  }
</style>
