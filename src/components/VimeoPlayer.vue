<template>
  <div :class=" `absolute ${active ? 'opacity-100' : 'opacity-0' }` ">
    <h1>video</h1>
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
      videoId: null
    }
  },
  methods: {
    createPlayer() {
      this.player = new Player('vimeo-player', {id: '196345588'})
    }, 
    setVideo(id) {
      this.player.loadVideo(parseInt(id))
    }
  },
  mounted() {
    if (this.player === null) this.createPlayer()
  },
  created() {
  }
}
</script>

<style>

</style>