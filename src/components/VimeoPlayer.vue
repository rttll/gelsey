<template>
  <div>
    <h1>video</h1>
    <div ref="player" id="vimeo-player"></div>
    <ul>
      <li
        v-on:click="() => { setVideo('509851626') } "
      >
        509851626
        </li>
    </ul>
  </div>
</template>

<script>
import Player from '@vimeo/player'
export default {
  name: 'VimeoPlayer',
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