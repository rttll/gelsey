<template>
  <div>
    <p>hi</p>
    <p>{{url}}</p>
    <img :src="src" alt="nope">
  </div>
</template>

<script>
export default {
  name: 'VideoListLink',
  props: {
    url: String
  },
  data() {
    return {
      id: '',
      src: ''
    }
  },
  created() {
    const yt = this.url.includes('youtube')
    const char = yt ? '=' : '/'
    this.id = this.url.split(char).pop()
    if (yt) {
      this.src = `https://img.youtube.com/vi/${this.id}/mqdefault.jpg`
    } else {
      const x = 'http://vimeo.com/api/v2/video/'+this.id+'.json'
      fetch(x)
      .then(resp => resp.json())
      .then((json) => {
        console.log(json)
        this.src = json[0].thumbnail_medium
      })
      .catch(console.error)
    }
    
  }
}
</script>

<style>

</style>