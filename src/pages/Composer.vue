<template>
  <Layout>
    <Heading :display="true">
      Composer
    </Heading>
    <div v-if="body" class="p-8 my-12 mb-24 shadow-sm bg-gray-50">
      <BlockContent :blocks="body" />
    </div>
    <section>
      <article v-for="comp in work" class="" :key="comp.id">
        <div class="flex mb-20 space-x-10 pb-9">
          <div class="w-1/3 space-y-2">
            <header class="text-rwight">
              <Heading tag="h3">
                {{ comp.title }}
              </Heading>
              <p class="text-lg text-gray-400">{{ comp.year }}</p>
            </header>
          </div>
          <div
            class="text-base leading-loose md:w-2/3 md:pr-20"
            v-if="comp._rawShort_description"
          >
            <BlockContent :blocks="comp._rawShort_description" />
            <div  class="flex justify-end">
              <a v-if="comp.external_link" :href="comp.external_link">More &rarr;</a>
              <g-link v-else :to="comp.slug">More &rarr;</g-link>
            </div>
          </div>
        </div>
      </article>
    </section>
  </Layout>
</template>

<page-query>

query {
  sanityComposer(id: "composer") {
    _rawBody

  }
  work: allSanityWork(sortBy: "order", order: ASC) {
    edges {
      node {
        id
        title
        year 
        external_link
        _rawShort_description
        _rawDescription
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
      body: null,
      work: [],
    };
  },
  created() {
    this.body = this.$page.sanityComposer._rawBody;
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
