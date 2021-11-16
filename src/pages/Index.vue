<template>
  <Layout></Layout>
</template>

<script>

import Header from '../components/base/Header.vue';
import GridMenu from '~/components/base/GridMenu'

import albums from '~/assets/nav/white/albums.svg';
import composer from '~/assets/nav/white/composer.svg';
import performer from '~/assets/nav/white/performer.svg';
import press from '~/assets/nav/white/press.svg';
import scholar from '~/assets/nav/white/scholar.svg';
import videos from '~/assets/nav/white/videos.svg';
import bio from '~/assets/nav/white/bio.svg';
import events from '~/assets/nav/white/events.svg';
import contact from '~/assets/nav/white/contact.svg';

export default {
  metaInfo: {
    title: 'Home',
  },
  components: {
    Header,
    GridMenu,
    albums,
    composer,
    performer,
    press,
    scholar,
    videos,
    bio,
    events,
    contact,
  },
};
</script>

<style>
  .Nav a {
    transition: opacity .4s;
  }
  .Nav:hover a {
    opacity: .6;
  }
  .Nav:hover a:hover {
    opacity: 1;
  }

.svgfoo {
  display: block;
  width: 100%;
  height: auto;
  max-height: 50%;
}
.small svg {
  height: 100%;
  margin: auto;
}
</style>
