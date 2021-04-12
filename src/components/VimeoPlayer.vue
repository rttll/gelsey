<template>
  
  <div>
    <p>vimeo active {{active}}</p>
    <div :class=" `absolute ${active ? 'opacity-100' : 'opacity-0' }` ">
      <div ref="player" id="vimeo-player"></div>
    </div>
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
  watch: {
    active(is, was) {
      if (!this.player) this.createPlayer()
      if (is) {
        this.setVideo()
      } else {
        this.player.pause()
      }
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
      const currentId = await this.player.getVideoId()
      if (currentId === parseInt(this.id)) {
        this.player.play()
      } else {
        this.player.loadVideo(parseInt(this.id))
      }
    }
  },
}
</script>

<style>

</style>