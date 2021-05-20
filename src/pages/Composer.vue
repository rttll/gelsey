<template>
  <Layout>
    <Heading>
      Composer
    </Heading>
    <ul>
      <li v-for="obj in work" :key="obj.id">
        <g-link :to="obj.slug">{{ obj.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query {
    work: allSanityWork(sortBy: "order", order: ASC) {
      edges {
        node {
          id 
          title
        }
      }
    }
  }
</page-query>

<script>
export default {
  name: 'Composer',
  data() {
    return {
      work: [],
    };
  },
  created() {
    this.work = this.$page.work.edges.map((obj) => {
      obj.node.slug =
        this.$route.path +
        '/' +
        obj.node.title
          .replace(/\s/g, '-')
          .replace(/[A-Z]/g, (match) => match.toLowerCase());
      return obj.node;
    });
  },
};
</script>

<style></style>
