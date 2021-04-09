<template>
  <Layout>
    <VimeoPlayer />
    <h1>video</h1>
    <div id="ytplayer"></div>
    <ul>
      <li
        v-on:click="() => { setVideo('M7lc1UVf-VE') } "
      >
        M7lc1UVf-VE
        </li>
    </ul>
  </Layout>
</template>

<script>
import VimeoPlayer from '../components/VimeoPlayer.vue';
export default {
	components: { VimeoPlayer },
  name: 'Video',
  data() {
    return {
      yt: {
        player: null,
        videoId: null
      },
      vimeo: {
        player: null
      }
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
      this.yt.player.loadVideoById(id, 0, "large")
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