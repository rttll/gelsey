<template>
  <Layout>
    <Heading>
      {{work.title}}

    </Heading>
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
