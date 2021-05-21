<template>
  <Layout>
    <header class="p-4">
      <Heading :display="true">
        Bio
      </Heading>
    </header>
    <section
      class="flex flex-col p-4 space-y-4 album-md:flex-wrap album-md:space-y-0 album-md:flex-row"
    >
      <BlockContent :blocks="bio._rawBody" />
    </section>
  </Layout>
</template>

<page-query>
  query {
    bios: allSanityBio(limit: 1) {
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
  name: 'Bio',
  data() {
    return {
      bio: null,
    };
  },
  created() {
    this.bio = this.$page.bios.edges.map((obj) => obj.node)[0];
  },
};
</script>

<style></style>
