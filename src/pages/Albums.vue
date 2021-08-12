<template>
  <Layout>
    <header class="flex items-baseline justify-between p-4">
      <Heading :display="true">
        Albums
      </Heading>
      <Social />
    </header>
    <section
      class="flex flex-col p-4 space-y-4 album-md:flex-wrap album-md:space-y-0 album-md:flex-row"
    >
      <Album
        v-for="album in albums.filter(a => !a.other)"
        :album="album" :key="album.id" 
      />
    </section>
    <section class="pb-20">
      <h3 class="p-4"> With other people</h3>
      <div class="flex flex-col p-4 space-y-4 album-md:flex-wrap album-md:space-y-0 album-md:flex-row">
        <Album
          v-for="album in albums.filter(a => a.other)"
          :album="album" :small="true" :key="album.id" 
        />
      </div>
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
          link
          link_text
          other
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
import Social from '~/components/Social';
export default {
  name: 'Albums',
  components: { Album, Social },
  computed: {
    albums() {
      return this.$page.albums.edges.map((obj) => obj.node);
    },
  },
};
</script>

<style></style>
