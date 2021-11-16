<template>
  <nav class="flex flex-col items-stretch justify-center flex-grow flex-shrink w-screen h-screen m-auto"
    style="max-width:1000px;"
  >
    
    <div class="grid flex-shrink grid-cols-3 border-b border-gray-200 border-dashed flex-wgrow">
      <div class="text-center border-r border-gray-200 border-dashed">
        <g-link to="/bio/" class="block w-auto p-2 h-14 md:h-16 small">
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

    <!-- 1px height forces it to shrink   -->
    <div class="flex flex-wrap items-stretch flex-grow flex-shrink" style="height:1px">
      <g-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="relative flex items-center justify-center flex-grow flex-shrink w-1/2 overflow-hidden border-gray-200 border-dashed md:w-1/3 main-link"
        :class="link.classes"
      >
        <component class="absolute z-20" :is="link.component" />

        <!-- G-Image src attribute must be static -->
        <!-- https://gridsome.org/docs/images/#images -->
        
        <g-image
          v-if="link.composer"
          src="~/assets/images/nav/composer.jpg"
          width="500" 
          :class="link.imageClass + imageClass"
          :style="imageStyle"  
        />
        <g-image
          v-if="link.performer"
          src="~/assets/images/nav/performer.jpg"
          width="500" 
          :class="link.imageClass + imageClass"
          :style="imageStyle"  
        />
        <g-image
          v-if="link.scholar"
          src="~/assets/images/nav/scholar.jpg"
          width="500" 
          :class="link.imageClass + imageClass"
          :style="imageStyle"  
        />
        <g-image
          v-if="link.albums"
          src="~/assets/images/nav/albums.jpg"
          width="500" 
          :class="link.imageClass + imageClass"
          :style="imageStyle"  
        />
        <g-image
          v-if="link.video"
          src="~/assets/images/nav/video.jpg"
          width="500" 
          :class="link.imageClass + imageClass"
          :style="imageStyle"  
        />
        <g-image
          v-if="link.press"
          src="~/assets/images/nav/press.jpg"
          width="500" 
          :class="link.imageClass + imageClass"
          :style="imageStyle"  
        />
      </g-link>      
    </div>
    
  </nav>
</template>

<script>

import albums from '~/assets/nav/trans/albums.svg';
import composer from '~/assets/nav/trans/composer.svg';
import performer from '~/assets/nav/trans/performer.svg';
import press from '~/assets/nav/trans/press.svg';
import scholar from '~/assets/nav/trans/scholar.svg';
import videos from '~/assets/nav/trans/videos.svg';
import bio from '~/assets/nav/trans/bio.svg';
import events from '~/assets/nav/trans/events.svg';
import contact from '~/assets/nav/trans/contact.svg';

export default {
  name: 'GridMenu',
  data() {
    return {
      imageClass: ' absolute z-10 object-center object-cover opacity-70 ',
      imageStyle: '',
      links: [
        {
          to: "/composer/",
          component: "composer",
          classes: "border-b border-r  ",
          composer: true,
          imageClass: '',
        },
        {
          to: "/performer/", 
          component: "performer",
          classes: "border-b md:border-r  ",
          performer: true,
          imageClass: '',
        },
        {
          to: "/scholar/",
          component: "scholar",
          classes: "border-b border-r md:border-r-0  " ,
          scholar: true,
          imageClass: ' top-0 ',
        },
        {
          to: "/albums/",
          component: "albums",
          classes: "border-b md:border-b-0 md:border-r  ",
          imageClass: '',
          albums: true
        },
        {
          to: "/videos/", 
          component: "videos",
          classes: "border-r ",
          imageClass: ' top-0 ',
          video: true,
        },
        {
          to: "/press/",
          component: "press",
          classes: "",
          imageClass: ' top-0 ',
          press: true,
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
  max-height: 120%;
}

</style>
