<template>
<div>

    <p>yt active {{active}}</p>
  <div :class=" `absolute ${active ? 'opacity-100' : 'opacity-0' }` ">
    <div id="player"></div>
  </div>
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
  watch: {
    active(is, was) {
      if (!this.player) return;
      if (is) {
        this.setVideo()
      }
      else {this.player.pauseVideo()}
    }
  },
  methods: { 
    onYTReady() {
      if (this.active) {
        this.setVideo()
      }
      // this.player.loadVideoById("bHQqvYy5KYo", 0, "large")
    },
    onYTStateChange() {},
    setVideo() {

      this.player.loadVideoById(this.id, 0, "large")
    }
  },
  created() {
    const onYouTubePlayerAPIReady = () => {
      this.player = new YT.Player('player', {
        height: '360',
        width: '640',
        events: {
          'onReady': this.onYTReady,
          'onStateChange': this.onYTStateChange
        }
      });
    }
    window.onYouTubePlayerAPIReady = onYouTubePlayerAPIReady.bind(this)
    if (document.getElementById('youtube-api') === null) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/player_api";
      tag.id = "youtube-api"
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);    
    }
  }
}
</script>

<style>

</style>