<template>
  <div>
    <div ref="player" id="vimeo-player"></div>
  </div>
</template>

<script>
import Player from '@vimeo/player'
export default {
  name: 'VimeoPlayer',
  props: {
    active: Boolean,
    id: String
  },  
  data() {
    return {
      player: null,
      autoplay: false
    }
  },
  methods: {
    onPlayerLoaded() {
      if (this.autoplay) this.player.play()
      else this.autoplay = true // todo: this is activating on first load, should not
    },
    createPlayer() {
      this.player = new Player('vimeo-player', {id: parseInt(this.id)})
      this.player.on('loaded', this.onPlayerLoaded)
    }, 
    setVideo: async function() {
      console.log('set')
      const currentId = await this.player.getVideoId()
      if (currentId === parseInt(this.id)) {
        this.player.play()
      } else {
        this.player.loadVideo(parseInt(this.id))
      }
    }
  },
  mounted() {
    if (!this.player) this.createPlayer()
    this.setVideo()  
  },
}
</script>

<style>

</style>