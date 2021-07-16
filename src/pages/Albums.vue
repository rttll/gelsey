<template>
  <Layout>
    <header class="p-4">
      <Heading :display="true">
        Albums
      </Heading>
    </header>
    <section
      class="flex flex-col p-4 space-y-4 album-md:flex-wrap album-md:space-y-0 album-md:flex-row"
    >
      <article
        v-for="album in albums"
        class="w-full album-md:w-1/2 md:w-1/3 album-container"
      >
        <Album :album="album" :key="album.id" />
      </article>
    </section>
  </Layout>
</template>

<page-query>
  query {
    albums: allSanityAlbum(sort: [{order: ASC}]) {
      edges {
        node {
          id
          title
          year
          description
          link 
          cover {
            asset {
              url
            }
            
          }
        }
      }
    } 
  }
</page-query>

<script>
import Album from '../components/Album';
export default {
  name: 'Albums',
  components: { Album },
  computed: {
    albums() {
      return this.$page.albums.edges.map((obj) => obj.node);
    },
  },
};
</script>

<style></style>
