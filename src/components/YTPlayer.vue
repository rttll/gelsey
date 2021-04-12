<template>
  <div :class=" `absolute ${active ? 'opacity-100' : 'opacity-0' }` ">
    <div id="ytplayer"></div>
  </div>
</template>

<script>
export default {
  name: 'YTPlayer',
  props: {
    active: Boolean,
    id: String
  },
  data() {
    return {
      player: null
    }
  },
  methods: {
    createYTPlayer() {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      // <!-- https://www.youtube.com/watch?v=qXeceMXAwN0 --> 
    }, 
    onYTReady() {
      // this.yt.player.loadVideoById("bHQqvYy5KYo", 0, "large")
    },
    onYTStateChange() {},
    setVideo(id) {
      this.player.loadVideoById(id, 0, "large")
    }
  },
  mounted() {
    if (this.yt.player === null) this.createYTPlayer()
  },
  created() {
    const onYouTubePlayerAPIReady = () => {
      this.yt.player = new YT.Player('ytplayer', {
        height: '360',
        width: '640',
        events: {
          'onReady': this.onYTReady,
          'onStateChange': this.onYTStateChange
        }
      });
    }
    window.onYouTubePlayerAPIReady = onYouTubePlayerAPIReady.bind(this)
  }
}
</script>

<style>

</style>