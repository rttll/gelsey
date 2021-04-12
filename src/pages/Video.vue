<template>
  <Layout>
    <h1>video</h1>
    <div class="flex space-x-4">
      <div class="relative w-3/4">
        <div class="">
          <YTPlayer :id="id" :active="active === 'yt' " />
          <VimeoPlayer :id="id" :active="active === 'vimeo' " />
        </div>
      </div>
      <nav class="w-1/4">
        <ul>
          <li
            class="cursor-pointer"
            v-for="link in links"
            v-on:click="() => { setVideo(link) } "
          >
            {{link}}
            </li>
        </ul>
      </nav>
    </div>
  </Layout>
</template>

<script>
import YTPlayer from '../components/YTPlayer.vue'
import VimeoPlayer from '../components/VimeoPlayer.vue';
export default {
	components: { VimeoPlayer, YTPlayer },
  name: 'Video',
  data() {
    return {
      id: null,
      active: 'yt',
      links: ['https://www.youtube.com/watch?v=j77wUsGrvrA']
    }
  },
  methods: {
    setVideo(url) {
      const yt = url.includes('youtube')
      if (yt) {
        this.id = url.split('=').pop()
        this.active = 'yt'
      } else {
        this.id = url.split('=').pop()
        this.active = 'vimeo'
      }
    }
  },
  mounted() {
    this.setVideo(this.links[0])
    // if (this.yt.player === null) this.createYTPlayer()
  },
  created() {
    
  }
}
</script>

<style>

</style>