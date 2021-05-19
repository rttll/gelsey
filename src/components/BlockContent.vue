<template>
  <div class="content">
    <SanityBlocks :blocks="blocks" />
  </div>
</template>

<script>
import SanityBlocks from 'sanity-blocks-vue-component';
export default {
  name: 'BlockContent',
  props: ['blocks'],
  components: { SanityBlocks },
};
</script>

<style>
.content a {
  text-decoration: underline;
}
</style>
