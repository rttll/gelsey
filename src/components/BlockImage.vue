<template>
  <img
    :class="`${imageClass} pb-4`"
    alt=""
    :src="`${asset.url}?auto=format&w=800`"
  />
</template>

<script>
export default {
  name: 'BlockImage',
  props: {
    align: Array,
    asset: Object,
    crop: Object,
    hotspot: Object,
  },
  data() {
    return {
      imageClass: this.align ? `align-${this.align[0]}` : '',
    };
  },
};
</script>

<style>
figure {
  margin: 0;
}

.content img.align-left {
  float: left;
  padding-right: 2rem;
}

.content img.align-right {
  float: right;
  padding-left: 2rem;
}

.content img[class*='align'] {
  width: 50%;
}

.content img[class*='align'] + p {
  padding-top: 0;
}

@media only screen and (max-width: 640px) {
  .content img,
  .content img[class*='align'] {
    width: 100%;
    max-width: 100%;
    float: none;
    padding: 0 0 2rem 0;
  }
}
</style>
