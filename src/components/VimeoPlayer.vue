<template>
  <div class="">
    <div ref="player" id="vimeo-player"></div>
  </div>
</template>

<script>
import Player from '@vimeo/player'
export default {
  name: 'VimeoPlayer',
  props: {
    autoplay: Boolean,
    active: Boolean,
    video: Object
  },  
  data() {
    return {
      player: null,
    }
  },
  computed: {
    id() {
      // todo this will fail if url has trailing slash
      return this.video.url.split('/').pop()
    }
  },
  watch: {
    video(is, was) {
      this.setVideo()
    }
  },
  methods: {
    onPlayerLoaded() {
      // if (this.autoplay) this.player.play()
    },
    createPlayer() {
      this.player = new Player('vimeo-player', {id: parseInt(this.id), responsive: true})
      this.player.on('loaded', this.onPlayerLoaded)
    }, 
    setVideo: async function() {
      const currentId = await this.player.getVideoId()
      console.log(currentId !== parseInt(this.id))
      if (currentId !== parseInt(this.id)) {
        this.player.loadVideo(parseInt(this.id))
        this.player.play()
      } else if (this.autoplay) {
        this.player.play()
      }
    }
  },
  created() {
  },
  mounted() {
    if (!this.player) this.createPlayer()
    this.setVideo()  
  },
}
</script>

<style>

</style>