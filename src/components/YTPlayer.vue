<template>
  <div class="space-y-4">
    <div id="player"></div>

  </div>
</template>

<script>
export default {
  name: 'YTPlayer',
  props: {
    autoplay: Boolean,
    active: Boolean,
    video: Object
  },
  data() {
    return {
      player: null,
      width: '640',
      height: '360',
      firstMount: false,
    }
  },
  computed: {
    id() {
      return this.video.url.split('=').pop()
    }
  },
  watch: {
    video(is, was) {
      this.cueVideo()
    }
  },
  methods: { 
    cueVideo() {
      this.player.cueVideoById(this.id, 0, "large")
    },
    createPlayer() {
      this.player = new YT.Player('player', {
        width: this.width,
        height: this.height,
        playerVars: {
          autoplay: 0,
          controls: 1,
          iv_load_policy: 3,
          modestbranding: 1,
        },
        events: {
          'onReady': this.cueVideo
        }
      });
    },
    onYTReady() {
      this.cueVideo()
      console.log('ready')
    },
    createScriptTag() {
      // onYouTubePlayerAPIReady() is called automatically by the API, and must be globally available
      // It is only called once, when the script is loaded
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started

      const onYouTubePlayerAPIReady = () => { 
        this.createPlayer() 
      }
      window.onYouTubePlayerAPIReady = onYouTubePlayerAPIReady.bind(this)

      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/player_api";
      tag.id = "youtube-api"
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);    
    },
    setPlayerDimensions() {
      let width = document.getElementById('player-container').clientWidth
      let height = parseInt(width) * 0.5625
      this.width = width
      this.height = height
      if (this.player) this.player.setSize(width, height)
    }, 
  },
  mounted() {
    this.setPlayerDimensions()
    window.addEventListener('resize', this.setPlayerDimensions)
    
    // We always create a new Player on mount, but only load the script once.
    this.firstMount = document.getElementById('youtube-api') === null
    if (this.firstMount) {

      // Load script, which will create player in the
      // onYouTubePlayerAPIReady() callback
      this.createScriptTag()
    } else {

      // Script is already loaded, so create player directly
      this.createPlayer()
    }
  },
}
</script>

<style>

</style>