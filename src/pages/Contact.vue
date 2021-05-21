<template>
  <Layout>
    <Heading :display="true">
      Contact
    </Heading>
    <section class="p-4 ">
      <BlockContent v-if="body" :blocks="body._rawBody" />
    </section>
  </Layout>
</template>

<page-query>
  query {
    contact: allSanityContact(limit: 1) {
      edges {
        node {
          id
          _rawBody(resolveReferences: {maxDepth: 5})
        }
      }
    } 
  }
</page-query>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      body: null,
    };
  },
  created() {
    this.body = this.$page.contact.edges.map((obj) => obj.node)[0];
  },
};
</script>

<style></style>
