<template>
  <Layout>
    <Container>
      <Heading :display="true">
        {{work.title}}
      </Heading>
      <article class="pb-6 my-12">
        <div
          class="text-base leading-loose md:w-2/3 md:pr-20"
          v-if="work._rawDescription"
        >
          <BlockContent :blocks="work._rawDescription" />
        </div>
      </article>
    </Container>
    <footer class="py-12">
      <g-link to="/composer" class="block px-6 py-6 text-lg md:px-20 bg-gray-50">
        &larr; Back to Composer</g-link>
    </footer>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  sanityWork(id: $id) {
    title
    _rawDescription(resolveReferences: {maxDepth: 5})
  }
}
</page-query>

<script>
export default {
  name: 'Work',
  data() {
    return {
      work: {}
    }
  },
  created() {
    this.work = this.$page.sanityWork
  }
};
</script>
