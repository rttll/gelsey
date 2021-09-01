<template>
  <div class="content">
    <SanityBlocks :blocks="blocks" :serializers="serializers" />
  </div>
</template>

<script>
import SanityBlocks from 'sanity-blocks-vue-component';
import BlockImage from './BlockImage';
import BlockVimeo from './BlockVimeo';
import BlockYoutube from './BlockYoutube';

export default {
  name: 'BlockContent',
  props: {
    blocks: Array,
  },
  components: { SanityBlocks, BlockImage, BlockVimeo, BlockYoutube, },
  data() {
    return {
      serializers: {
        types: {
          blockImage: BlockImage,
          vimeo: BlockVimeo,
          youtube: BlockYoutube,
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
.content a:hover {
  text-decoration: none;
}

.content blockquote {
  @apply bg-gray-50 p-8;
  font-style: italic;
}

.content p:empty {
  padding: 1rem 0;
}

.content p:first-child {
  padding-top: 0;
}

.content h1,
.content h2,
.content h3,
.content h4 {
  @apply text-2xl text-gray-900;
}

.content ul {
  padding-left: 1rem;
}

.content li {
  list-style: disc;
}
</style>
