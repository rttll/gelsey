<template>
  <Layout>
    <h1>video</h1>
    <div class="flex space-x-4">
      <div class="relative w-3/4">
        <div class="">
          <YTPlayer    :id="yt.id" :active="yt.active" />
          <VimeoPlayer :id="vim.id" :active="vim.active" />
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
      yt: {
        id: null,
        active: false
      }, 
      vim: {
        id: null, 
        active: false
      },
      links: [
        'https://vimeo.com/533583983',
        'https://www.youtube.com/watch?v=j77wUsGrvrA',
      ]
    }
  },
  methods: {
    setVideo(url) {
      const yt = url.includes('youtube')
      if (yt) {
        this.vim.active = false
        this.yt.id = url.split('=').pop()
        this.yt.active = true
      } else {
        this.yt.active = false
        this.vim.id = url.split('/').pop()
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