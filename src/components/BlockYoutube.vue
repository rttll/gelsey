<template>
  <article>
    <iframe 
      width="560" 
      height="315" 
      :src="src"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
    ></iframe>
  </article>
</template>

<script>
export default {
  name: 'BlockYoutube',
  props: {
    url: String
  },
  data() {
    return {
      src: ''
    };
  },
  created() {
    let id = this.url.split('=').pop()
    let url = `https://www.youtube.com/embed/${id}`
    this.src = url
  }
};
</script>

