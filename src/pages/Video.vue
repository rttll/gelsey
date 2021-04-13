<template>
  <Layout>
    <h1>video</h1>
    <div class="flex space-x-4">
      <div class="relative w-3/4">
        <div class="">
          <!-- <keep-alive> -->
            <component
              v-bind:is="activePlayer"
              :id="id"
              >
            </component>
          <!-- </keep-alive> -->
        </div>
      </div>
      <nav class="w-1/4">
        <ul>
          <li
            class="cursor-pointer"
            v-for="link in links"
            v-on:click="() => { setVideo(link) } "
          >
              <VideoListLink :url="link" />
            </li>
        </ul>
      </nav>
    </div>
  </Layout>
</template>

<script>
import VideoListLink from '../components/VideoListLink.vue'
import YTPlayer from '../components/YTPlayer.vue'
import VimeoPlayer from '../components/VimeoPlayer.vue';
export default {
	components: { VimeoPlayer, YTPlayer, VideoListLink },
  name: 'Video',
  data() {
    return {
      activePlayer: null,
      id: null,
      yt: {
        id: null,
        active: false
      }, 
      vim: {
        id: null, 
        active: false
      },
      links: [
        'https://www.youtube.com/watch?v=j77wUsGrvrA',
        'https://vimeo.com/196345588',
      ]
    }
  },
  methods: {
    setVideo(url) {
      const yt = url.includes('youtube')
      if (yt) {
        this.activePlayer = YTPlayer
        this.vim.active = false
        this.yt.id = url.split('=').pop()
        this.id = url.split('=').pop()
        this.yt.active = true
      } else {
        this.activePlayer = VimeoPlayer
        this.yt.active = false
        this.vim.id = url.split('/').pop()
        this.id = url.split('/').pop()
        this.vim.active = true
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setVideo(this.links[0])
    })
  },
  created() {
    
  }
}
</script>

<style>

</style>