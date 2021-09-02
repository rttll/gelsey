<template>
  <Layout>
    <Container>
      <Heading :display="true">
        {{work.title}}
      </Heading>
      <section class="pb-20 my-12">
        <div
          class="text-base leading-loose md:w-2/3 md:pr-20"
          v-if="work._rawDescription"
        >
          <BlockContent :blocks="work._rawDescription" />
        </div>
      </section>
      <section class="py-12">
        <g-link to="/composer">&larr; Back to Composer</g-link>
      </section>
    </Container>
  </Layout>
  </div>
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
