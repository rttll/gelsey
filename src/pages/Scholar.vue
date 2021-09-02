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
      <section>
        <article v-for="pub in publications" class="" :key="pub.id">
          {{ pub.title }}
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
		publications {
      title
      link
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
    this.publications = scholar.publications;
  },
};
</script>

<style></style>
