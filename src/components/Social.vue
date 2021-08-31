<template>
  <div class="flex p-4 space-x-1">
    <span v-for="link in links" :key="link.id">
      <a :href="link.link" :title="link.name">
        <component class="text-3xl" :is="link.icon[0]" />
      </a>
    </span>
  </div>
</template>

<static-query>
  query {
    social: allSanitySocialLink(sort: [{order: DESC}]) {
      edges {
        node {
          id
          name
          link 
          icon
        }
      }
    } 
  }
</static-query>

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
    this.links = this.$static.social.edges.map((obj) => obj.node )
  },
};
</script>

<style></style>
