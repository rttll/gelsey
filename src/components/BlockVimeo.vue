<template>
  <article>
    <div style="padding:56.25% 0 0 0;position:relative;">
      <iframe 
        :src="src"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </article>
</template>

<script>
import Player from '@vimeo/player'
export default {
  name: 'BlockImage',
  props: {
    url: String
  },
  data() {
    return {
      src: ''
    };
  },
  created() {
    let id = this.url.split('/').pop()
    let url = `https://player.vimeo.com/video/${id}?title=1&byline=0&portrait=0`
    this.src = url
  }
};
</script>

