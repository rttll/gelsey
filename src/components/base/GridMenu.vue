<template>
  <nav class="flex flex-col items-stretch justify-center flex-grow flex-shrink w-screen h-screen m-auto"
    style="max-width:1000px;"
  >
    
    <div class="grid flex-shrink grid-cols-3 border-b border-gray-200 border-dashed flex-wgrow">
      <div class="text-center border-r border-gray-200 border-dashed">
        <g-link @click="foo" to="/bio/" class="block w-auto p-2 h-14 md:h-16 small">
          <component is="bio" />
        </g-link>
      </div>
      <div class="text-center border-r border-gray-200 border-dashed">
        <g-link to="/events/" class="block w-auto p-2 h-14 md:h-16 small">
          <events />
        </g-link>
      </div>
      <div class="text-center border-gray-200 border-dashed ">
        <g-link to="/contact/" class="block w-auto p-2 h-14 md:h-16 small">
          <contact />
        </g-link>
      </div>
    </div>
    
    <!-- <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3"> -->
        <!-- class="flex items-center justify-center w-1/2 border-b border-r border-dashed gorder-gray-200 md:w-1/3 big"> -->
    <div class="flex flex-wrap items-start flex-grow flex-shrink" style="height:1px">
      <g-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="flex items-center justify-center flex-grow flex-shrink w-1/2 overflow-hidden border-gray-200 border-dashed md:w-1/3 main-link"
        :class="link.classes"
        style="height: 33.333%"
      >
        <component :is="link.component" />
      </g-link>      
    </div>
    
  </nav>
</template>

<script>

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
  name: 'GridMenu',
  data() {
    return {
      links: [
        {
          to: "/composer/",
          component: "composer",
          classes: "border-b border-r  ",
        },
        {
          to: "/performer/", 
          component: "performer",
          classes: "border-b md:border-r  ",
        },
        {
          to: "/scholar/",
          component: "scholar",
          classes: "border-b border-r md:border-r-0  " ,
        },
        {
          to: "/albums/",
          component: "albums",
          classes: "border-b md:border-b-0 md:border-r  ",
        },
        {
          to: "/videos/", 
          component: "videos",
          classes: "border-r ",
        },
        {
          to: "/press/",
          component: "press",
          classes: "",
        },
      ]
    }
  },
  components: {
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
  methods: {
    foo(e) {
      console.log(e)
    }
  }
};
</script>

<style>
  .Nav a {
    transition: opacity .4s;
  }
  .Nav:hover a {
    opacity: .75;
  }
  .Nav:hover a:hover {
    opacity: 1;
  }

svg {
  width: 100%;
  /* height: auto; */
  max-height: 100%;
}

/* .main-link svg {
  width: 120%;
} */

</style>
