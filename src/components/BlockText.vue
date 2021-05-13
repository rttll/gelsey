<template>
  <div>
    {{ _sanityProps }}
  </div>
</template>

<script>
// import BlockContent from 'sanity-blocks-vue-component/blocksToVue'
  // var blocksToVue = require('./blocksToVue');

  import blocksToHtml from '@sanity/block-content-to-html'
  import PortableText from 'sanity-blocks-vue-component'

  export default {
    name: 'BlockText',
    props: {
      _sanityProps: Object
    },
    data() {
      return {
        foo: PortableText,
        bar: blocksToHtml
      }
    }
  }
</script>

