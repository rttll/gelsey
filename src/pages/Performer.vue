<template>
  <Layout>
    <Heading :display="true">
      Performer
    </Heading>
    <div v-if="body" class="p-8 my-12 mb-24 shadow-sm bg-gray-50">
      <BlockContent :blocks="body" />
    </div>
    <section>
      <article v-for="perf in performances" class="" :key="perf.id">
        <div class="flex mb-20 space-x-10 pb-9">
          <div class="w-1/3 space-y-2">
            <header class="text-rwight">
              <Heading tag="h3">
                {{ perf.title }}
              </Heading>

              <p class="text-gray-400">{{ perf.year }}</p>
              <a
                v-if="perf.link"
                :href="perf.link"
                class="text-xs text-gray-400"
              >
                {{ perf.link }}
              </a>
            </header>
          </div>
          <div
            class="text-base leading-loose md:w-2/3"
            v-if="perf._rawDescription"
          >
            <BlockContent :blocks="perf._rawDescription" />
            <div v-if="perf.link">
              <a :href="perf.link">More &rarr;</a>
            </div>
          </div>
        </div>
      </article>
    </section>
  </Layout>
</template>

<page-query>

query {
  sanityPerformer(id: "performer") {
    id
    _rawBody
		performances {
      title
      _rawDescription
    }
  }
} 
</page-query>

<script>
export default {
  name: 'Performer',
  data() {
    return {
      body: null,
      performances: [],
    };
  },
  created() {
    let performer = this.$page.sanityPerformer;
    this.body = performer._rawBody;
    this.performances = performer.performances;
  },
};
</script>

<style></style>
