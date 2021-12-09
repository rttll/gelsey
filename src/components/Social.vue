<template>
  <div class="flex p-4 space-x-1">
    <span v-for="link in links" :key="link.id">
      <a :href="link.link" :title="link.name" class="transition-colors duration-150 hover:text-gray-800">
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

import { SpotifyFill as spotify } from 'vue-icon-packs/ri'
import { MusicalNotes as apple } from 'vue-icon-packs/io'
import { InstagramFill as instagram, FacebookCircleFill as facebook, TwitterFill as twitter} from 'vue-icon-packs/ri'

import bandcamp from '~/assets/icons/bandcamp.svg'

export default {
  name: 'Social',
  props: {
    group: {
      type: String,
      default: 'social', 
      required: false
    }
  },
  components: { spotify, bandcamp, apple, instagram, facebook, twitter }, 
  data() {
    return {
      links: [],
      groups: {
        music: ['spotify', 'apple', 'bandcamp'],
        social: ['email', 'instagram', 'twitter', 'facebook']
      }
    };
  },
  created() {
    this.links = this.$static.social.edges
      .map((obj) => obj.node )
      .filter(node => this.groups[this.group].includes(node.icon[0])  )
  },
};
</script>