<template>
  <Layout>
    <Heading :display="true">
      <Container>Contact</Container>
    </Heading>
    <Container>
      <div class="text-gray-600">
        <Social />
      </div>
      <section class="p-4 ">
        <BlockContent v-if="body" :blocks="body._rawBody" />
      </section>
    </Container>
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
    social: allSanitySocialLink {
      edges {
        node {
          id
          name 
          icon
        }
      }
    } 
  }
</page-query>

<script>

import Social from '~/components/Social';

export default {
  name: 'Contact',
  components: { Social }, 
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

