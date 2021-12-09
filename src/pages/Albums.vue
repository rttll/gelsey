<template>
  <Layout>
    <header class="mb-16">
      <Heading :display="true">
        <Container>
          <div class="flex items-baseline justify-between">
            <span>Albums</span>
            <Social group="music" />
          </div>
        </Container>
      </Heading>
    </header>
    <Container>
      <section
        class="flex flex-col p-4 space-y-4 album-md:flex-wrap album-md:space-y-0 album-md:flex-row"
      >
        <Album
          v-for="album in albums.filter(a => !a.other)"
          :album="album" :key="album.id" 
        />
      </section>
    </Container>
    <section class="pb-20">
      <header class="my-16 md:my-32">
        <Heading :smallDisplay="true">
          <Container>
            Featured Performer
          </Container>
        </Heading>
      </header>
      <Container>
        <div class="flex flex-col p-4 space-y-4 album-md:flex-wrap album-md:space-y-0 album-md:flex-row">
          <Album
            v-for="album in albums.filter(a => a.other)"
            :album="album" :small="true" :key="album.id" 
          />
        </div>
      </Container>
    </section>
  </Layout>
</template>

<page-query>
  query {
    albums: allSanityAlbum(sort: [{order: ASC}]) {
      edges {
        node {
          id
          order
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
      return this.$page.albums.edges
        .map((obj) => obj.node)
        .sort((a, b) => a.order - b.order)
    },
  },
};
</script>

<style></style>
