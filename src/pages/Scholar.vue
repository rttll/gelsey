<template>
  <Layout>
    <Heading :display="true">
      Scholar
    </Heading>
    <div v-if="body" class="p-8 my-12 mb-24 shadow-sm bg-gray-50">
      <BlockContent :blocks="body" />
    </div>
    <section>
      <article v-for="pub in publications" class="" :key="pub.id">
        {{ pub.title }}
      </article>
    </section>
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
