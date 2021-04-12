<template>
  <div>
    <div id="player"></div>
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
    createPlayer() {
      this.player = new YT.Player('player', {
        height: '360',
        width: '640',
        playerVars: {
          controls: 1,
          iv_load_policy: 3,
          modestbranding: 1
        },
        events: {
          'onReady': this.onYTReady // This must be called for the api to work, even if it's not used
        }
      });
    },
    onYTReady() {
      this.player.loadVideoById(this.id, 0, "large")
    },
    createScriptTag() {
      // onYouTubePlayerAPIReady() is called automatically by the API, so make it globally available
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
  },
  mounted() {
    // We always create a new Player on mount, but only load the script once.
    const firstMount = document.getElementById('youtube-api') === null
    if (firstMount) {

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