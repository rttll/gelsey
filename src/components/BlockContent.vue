<template>
  <div class="content">
    <SanityBlocks :blocks="blocks" :serializers="serializers" />
  </div>
</template>

<script>
import SanityBlocks from 'sanity-blocks-vue-component';
import BlockImage from './BlockImage';
export default {
  name: 'BlockContent',
  props: {
    blocks: Array,
  },
  components: { SanityBlocks, BlockImage },
  data() {
    return {
      serializers: {
        types: {
          blockImage: BlockImage,
        },
      },
    };
  },
};
</script>

<style>
.content a {
  text-decoration: underline;
}
.content p {
  min-height: 1px;
  padding: 1rem 0;
}
</style>
