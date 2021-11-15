<template>
  <Layout>
    <Heading :display="true">
      <Container>Performer</Container>
    </Heading>
    <div v-if="body" class="py-16">
      <Container>
        <ContentContainer>
          <BlockContent :blocks="body" />
        </ContentContainer>
      </Container>
    </div>
    
    <header class="my-12">
      <Heading :smallDisplay="true">
        <Container>Performances</Container>
      </Heading>
    </header>
    
    <Container>
      <section class="py-20 space-y-6">
        <article v-for="perf in performances" class="" :key="perf.id">
          <div class="flex flex-col space-y-4 md:space-y-0 md:space-x-10 md:flex-row pb-9">
            <div class="space-y-2 overflow-hidden md:w-5/12">
              <header class="text-rwight">
                <Heading tag="h3">
                  {{ perf.title }}
                </Heading>

                <p class="text-gray-400">{{ perf.year }}</p>
              </header>
            </div>
            <div
              class="text-base leading-loose md:w-7/12"
              v-if="perf._rawDescription"
            >
              <BlockContent :blocks="perf._rawDescription" />
              <div v-if="perf.link" class="flex justify-end">
                <a :href="perf.link">More &rarr;</a>
              </div>
            </div>
          </div>
        </article>
      </section>
    </Container>
  </Layout>
</template>

<page-query>

query {
  sanityPerformer(id: "performer") {
    id
    _rawBody
  }

  performances: allSanityPerformance(sort: [{order: ASC}]) {
    edges {
      node {
        id 
        order
        title
        link
        _rawDescription
      }
    }
  }
} 
</page-query>

<script>
export default {
  name: 'Performer',
  data() {
    return {
      body: null,
      performances: [],
    };
  },
  created() {
    let performer = this.$page.sanityPerformer;
    this.body = performer._rawBody;
    this.performances = this.$page.performances.edges
      .map(edge => edge.node)
      .sort((a, b) => a.order - b.order)
  },
};
</script>

<style></style>
