<template>
  <li class="flex items-start space-x-2">
    <div
      class="w-1/2 cursor-pointer"
      :style="style"
      @click.prevent="$emit('clicked')"
      >
    </div>
    <a
      href="/"
      class="relative block cursor-pointer"
      @click.prevent="$emit('clicked')"
    >
      <span class="block font-medium">{{video.title}}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video: Object
  },
  data() {
    return {
      id: '',
      src: '',
    }
  },
  computed: {
    style() {
      return `padding-top: 30%; background: url(${this.src}) center center; background-size: cover`
    }
  },
  methods: {
    setVimeoThumbnail() {
      const dataUrl = 'http://vimeo.com/api/v2/video/'+this.id+'.json'
      fetch(dataUrl)
      .then(resp => resp.json())
      .then((json) => {
        this.src = json[0].thumbnail_medium
      })
      .catch(console.error)
    },
    setYTThumbnail() {
      this.src = `https://img.youtube.com/vi/${this.id}/mqdefault.jpg`
    }
  },
  created() {
    const yt = this.video.url.includes('youtube')
    const char = yt ? '=' : '/'
    this.id = this.video.url.split(char).pop()
    if (yt) {
      this.setYTThumbnail()
    } else {
      this.setVimeoThumbnail()
      
    }
    
  }
}
</script>

<style>

</style>