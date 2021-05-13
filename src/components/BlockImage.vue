<template>
  <img
    :src=" `${asset.url}?auto=format&w=800` "
    :class=" {'align-left' : alignLeft} "
    alt="">
</template>

<script>
  export default {
    name: 'BlockImage',
    props: {
      alignLeft: Boolean,
      asset: Object,
      crop: Object,
      hotspot: Object
    }
  }
</script>

<style>

  figure {
    margin: 0
  }

  img {
    width: 50%
  }

  img.align-left {
    float: left;
    padding-right: 2rem;
  }

  @media only screen and ( max-width: 640px) {
    img {
      width: 100%;
      max-width: 100%;
      float: none !important;
      padding: 0 !important;
    }
  }


</style>
