<template>
  <figure
      :class="`${containerClass} pb-4 image-container`"
  >
    <img
      :class="`w-full h-auto pb-4`"
      alt=""
      :src="`${asset.url}?auto=format&w=800`"
    />
    <figcaption v-if="caption" class="relative flex justify-end">
      <span class="absolute right-0 text-xs transform -translate-y-3">
        {{ caption }}
      </span>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'BlockImage',
  props: {
    align: Array,
    asset: Object,
    crop: Object,
    hotspot: Object,
    caption: String
  },
  data() {
    return {
      containerClass: this.align ? `align-${this.align[0]}` : '',
    };
  },
  created() {
  }
};
</script>

<style>

.content .image-container.align-left {
  float: left;
  padding-right: 2rem;
}

.content .image-container.align-right {
  float: right;
  padding-left: 2rem;
}

.content .image-container[class*='align'] {
  width: 50%;
}

.content .image-container[class*='align'] + p {
  padding-top: 0;
}

@media only screen and (max-width: 640px) {
  .content .image-container,
  .content .image-container[class*='align'] {
    width: 100%;
    max-width: 100%;
    float: none;
    padding: 0 0 2rem 0;
  }
}
</style>
