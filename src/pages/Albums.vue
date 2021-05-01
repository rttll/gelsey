<template>
  <Layout>
    <div 
    class="container flex flex-col p-4 space-y-4 album-md:flex-wrap album-md:space-y-0 album-md:flex-row">
      <div v-for="album in albums" class="w-full album-md:w-1/2 md:w-1/3 album-container">
        <Album :album="album" :key="album.title" />
      </div>
    </div>
  </Layout>
</template>

<script>
import Album from '../components/Album'
export default {
  name: 'Albums',
  components: {Album},
  data() {
    return {
      albums: [
        {
          title: 'album title',
          imgURL: 'https://via.placeholder.com/500',
          bandcamp: ''
        },
        {
          title: 'album title',
          imgURL: 'https://via.placeholder.com/500',
          bandcamp: ''
        },
        {
          title: 'album title',
          imgURL: 'https://via.placeholder.com/500',
          bandcamp: ''
        },
        {
          title: 'album title',
          imgURL: 'https://via.placeholder.com/500',
          bandcamp: ''
        },
        {
          title: 'album title',
          imgURL: 'https://via.placeholder.com/500',
          bandcamp: ''
        },
        {
          title: 'album title',
          imgURL: 'https://via.placeholder.com/500',
          bandcamp: ''
        },
        {
          title: 'album title',
          imgURL: 'https://via.placeholder.com/500',
          bandcamp: ''
        },
        {
          title: 'album title',
          imgURL: 'https://via.placeholder.com/500',
          bandcamp: ''
        },
      ]
    }
  }
}
</script>

<style>

</style>