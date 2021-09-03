<template>
  <Layout>
      <Heading :display="true">
        <Container>Scholar</Container>
      </Heading>
    <div v-if="body" class="py-16">
      <Container>
        <ContentContainer>
          <BlockContent :blocks="body" />
        </ContentContainer>
      </Container>
    </div>
    <Container>
      <section class="pb-56 space-y-4">
        <article v-for="pub in publications" class="text-sm" :key="pub.id">
          <template v-if="pub.link">
            <a :href="pub.link" class="">
              <span class="flex items-center space-x-1 font-medium">
                <span class="text-sm"><ArrowUpRight /></span>
                <span>{{ pub.title }}</span>
              </span>
              <div class="flex space-x-1">
                <span>{{ pub.publication }}</span>
                <span class="italic" v-if="pub.volum"> &bull; {{ pub.volume }} &nbsp; </span>
              </div>
            </a>
          </template>
          <template v-else>
            <span class="font-medium">{{ pub.title }}</span>
            <div class="flex space-x-1">
              <span>{{ pub.publication }}</span>
              <span class="italic" v-if="pub.volum"> &bull; {{ pub.volume }} &nbsp; </span>
            </div>
          </template>
        </article>
      </section>
    </Container>
  </Layout>
</template>

<page-query>

query {
  sanityScholar(id: "scholar") {
    id
    _rawBody
  }
  publications: allSanityPublication(sort: [{order: ASC}]) {
    edges {
      node {
        title
        publication 
        volume
        link
      }
    }
  }
} 
</page-query>

<script>
export default {
  name: 'Scholar',
  data() {
    return {
      body: null,
      publications: [],
    };
  },
  created() {
    let scholar = this.$page.sanityScholar;
    this.body = scholar._rawBody;
    this.publications = this.$page.publications.edges.map(pub => pub.node);
  },
};
</script>

<style></style>
