<template>
  <Layout>
    <Heading :display="true">
      <Container>Contact</Container>
    </Heading>
    <Container>
      <section class="flex p-4 space-x-1">
        <span v-for="link in links" :key="link.id">
          <component class="text-4xl" :is="link.icon[0]" />
        </span>
      </section>
      <section class="p-4 ">
        <BlockContent v-if="body" :blocks="body._rawBody" />
      </section>
    </Container>
  </Layout>
</template>

<page-query>
  query {
    contact: allSanityContact(limit: 1) {
      edges {
        node {
          id
          _rawBody(resolveReferences: {maxDepth: 5})
        }
      }
    } 
    social: allSanitySocialLink {
      edges {
        node {
          id
          name 
          icon
        }
      }
    } 
  }
</page-query>

<script>
// import { LSpotify as spotify } from 'vue-icon-packs/bx'
import { SpotifyFill as spotify } from 'vue-icon-packs/ri'
import { MusicalNotes as apple } from 'vue-icon-packs/io'
import bandcamp from '~/assets/icons/bandcamp.svg'
export default {
  name: 'Contact',
  components: { spotify, bandcamp, apple }, 
  data() {
    return {
      body: null,
      links: [],
      list: [
        {title: 'Spotify', value: 'spotify' },
        {title: 'Bandcamp', value: 'bandcamp'},
        {title: 'Apple Music', value: 'apple'},
        {title: 'Twitter', value: 'twitter'},
        {title: 'Facebook', value: 'facebook'},
        {title: 'Instagram', value: 'instagram'},
        {title: 'Email', value: 'email'},
      ]
    };
  },
  created() {
    this.body = this.$page.contact.edges.map((obj) => obj.node)[0];
    this.links = this.$page.social.edges.map((obj) => {
      // for (let item of this.list) {
      //   obj.node[item.value] = obj.node.icon[0] === item.value
      // }
      return obj.node
    })
  },
};
</script>

<style></style>
