<template>
  <li class="flex items-start space-x-2">
    <div
      class="w-1/2 bg-pink-400 cursor-pointer"
      :style="style"
      @click.prevent="$emit('clicked')"
      >
    </div>
    <div class="h-full overflow-hidden">
      <a
        href="/"
        class="relative block cursor-pointer"
        @click.prevent="$emit('clicked')"
      >
        <span class="block text-base font-medium">{{video.title}}</span>
        <p 
          :style="`
            max-height: 33px;
          `"
        class="w-3/4 text-xs whitespace-nowrap overflow-ellipsis">{{video.description}}</p>
      </a>
    </div>
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
      return `
        width: 168px;
        min-width: 168px;
        height: 94px;
        background: url(${this.src}) center center; 
        background-size: cover
      `
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