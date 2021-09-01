<template>
  <article 
    class="w-full"
    :class="classes"
  >
    <div class="relative w-full album-container">

      <div
        class="absolute inset-0 z-10 w-full h-full transition-all duration-500 image-container"
        :style="style"
      >
      <!-- Shadow -->
      <!-- <div class="absolute inset-0 z-20 w-full h-full transition-all duration-300 albug-bg"> -->
      </div>
        <h3
          class="relative z-50 p-4 text-3xl font-light text-white album-content"
          :class="titleClasses"
        >
          {{ album.title }}
        </h3>
      <a v-if="album.link" :href="album.link" class="absolute bottom-0 right-0 z-50 inline-flex items-center p-4 space-x-1 text-white album-content">
        <span class="text-xs text-white"><ArrowUpRight /></span>
        <span>{{ album.link_text || "Link"}}</span>
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Album',
  props: { album: Object, small: Boolean },
  data() {
    return {
      style: `background-image: url(${this.album.cover.asset.url}); background-size: cover`,
      classes: this.small ? 'album-md:w-1/2 md:w-1/4' : 'album-md:w-1/2 md:w-1/3',
      titleClasses: this.small ? 'album-md:text-xl md:text-2xl' : 'album-md:text-2xl md:text-3xl'
    }
  }
};
</script>

<style lang="scss">
  .image-container {
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      box-shadow: inset 0 0 100px 30px #222;
      display: block;
      transition: opacity .5s;
      opacity: 0;
    }
  }
  .album-content {
    transition: opacity .5s;
    opacity: 0
  }
  .album-container {
    height: 0;
    padding-bottom: 100%;
    &:hover {
      .album-content {
        opacity: 1
      }
      .image-container {
        filter: grayscale(80%);
        &:before {
          opacity: 1;
        }
      }
    }
  }
</style>
