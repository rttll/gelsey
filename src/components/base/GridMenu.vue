<template>
  <nav class="flex flex-col items-stretch justify-center flex-grow flex-shrink w-full px-4 m-auto "
    style="max-width:1000px;"
  >
    
    <div class="grid flex-shrink grid-cols-3 flex-wgrow">
      <div class="text-center">
        <g-link to="/bio/" class="block w-auto p-2 h-14 md:h-16 small">
          <component is="bio" />
        </g-link>
      </div>
      <div class="text-center ">
        <g-link to="/events/" class="block w-auto p-2 h-14 md:h-16 small">
          <events />
        </g-link>
      </div>
      <div class="text-center ">
        <g-link to="/contact/" class="block w-auto p-2 h-14 md:h-16 small">
          <contact />
        </g-link>
      </div>
    </div>

    <div 
      class="flex flex-wrap items-stretch flex-shrink w-full shadow-lg " 
    >
      <g-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="relative flex items-center justify-center flex-grow flex-shrink w-1/2 overflow-hidden grid-nav-link md:w-1/3 main-link"
        :class="link.classes"
      >

        <span class="absolute opacity-0">
          {{ link.component }}
        </span>

        <!-- <g-image> src attribute must be static -->
        <!-- https://gridsome.org/docs/images/#images -->
        
        <g-image
          v-if=" link.component === 'composer' "
          src="~/assets/images/nav/composer.jpg"
          width="500" 
          :class="link.imageClass + imageClass"
          :style="imageStyle"  
        />
        <g-image
          v-if=" link.component === 'performer' "
          src="~/assets/images/nav/performer.jpg"
          width="500" 
          :class="link.imageClass + imageClass"
          :style="imageStyle"  
        />
        <g-image
          v-if=" link.component === 'scholar' "
          src="~/assets/images/nav/scholar.jpg"
          width="500" 
          :class="link.imageClass + imageClass"
          :style="imageStyle"  
        />
        <g-image
          v-if=" link.component === 'albums' "
          src="~/assets/images/nav/albums.jpg"
          width="500" 
          :class="link.imageClass + imageClass"
          :style="imageStyle"  
        />
        <g-image
          v-if=" link.component === 'videos' "
          src="~/assets/images/nav/videos.jpg"
          width="500" 
          :class="link.imageClass + imageClass"
          :style="imageStyle"  
        />
        <g-image
          v-if=" link.component === 'press' "
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

import '~/assets/css/menu.css'

export default {
  name: 'GridMenu',
  data() {
    return {
      imageClass: ' absolute z-10 object-center object-cover opacity-70X',
      imageStyle: 'width: 100%; height: auto; top: 50%; transform: translateY(-50%)',
      links: [
        {
          to: "/composer/",
          component: "composer",
          classes: "border-gray-400 border-b border-r rounded-tl-md ",
          imageClass: '',
        },
        {
          to: "/performer/", 
          component: "performer",
          classes: " border-gray-400 border-b md:border-r rounded-tr-md md:rounded-tr-none",
          imageClass: '',
        },
        {
          to: "/scholar/",
          component: "scholar",
          classes: "border-gray-400 border-b border-r md:border-r-0 md:rounded-tr-md  " ,
          imageClass: ' top-0 ',
        },
        {
          to: "/albums/",
          component: "albums",
          classes: "border-gray-400 border-b md:border-b-0 md:border-r md:rounded-bl-md ",
          imageClass: '',
        },
        {
          to: "/videos/", 
          component: "videos",
          classes: "border-gray-400 border-r rounded-bl-md md:rounded-bl-none ",
          imageClass: ' top-0 ',
        },
        {
          to: "/press/",
          component: "press",
          classes: "rounded-br-md ",
          imageClass: ' top-0',
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
  nav a {
    transition: opacity .4s;
  }
  nav a img {
    transition: filter .4s;
    /* filter: grayscale(.7); */
    /* filter: saturate(.2); */
  }
  nav:hover a {
    opacity: .75;
  }
  nav:hover img {
    filter: grayscale(.9);
  }
  nav:hover a:hover {
    opacity: 1;
  }
  nav:hover a:hover img{
    filter: grayscale(0);
  }

svg {
  width: 100%;
  max-height: 120%;
}

.small svg {
  height: 100%;
  margin: auto;
}

/* .composer {
  background-image: url(~/assets/images/nav/composer.jpg)
}
.performer {
  background-image: url(~/assets/images/nav/performer.jpg)
}
.scholar {
  background-image: url(~/assets/images/nav/scholar.jpg)
}
.albums {
  background-image: url(~/assets/images/nav/albums.jpg)
}
.videos {
  background-image: url(~/assets/images/nav/videos.jpg)
}
.press {
  background-image: url(~/assets/images/nav/press.jpg)
} */

/* 
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
} */

</style>
