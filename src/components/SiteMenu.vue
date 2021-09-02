<template>
  <div>
    
    <div class="pt-2 pr-2">
      <MenuIcon @clicked="toggle" />
    </div>

    <transition name="fade">
      <nav
        v-if="active"
        class="fixed inset-0 z-40 flex flex-col justify-center w-screen h-screen pl-20 overflow-x-hidden overflow-y-auto text-center bg-white"
        style="z-index: 999999"
      >
        <g-link v-for="link in links" class="block w-full p-4 py-2 pr-20 text-4xl text-gray-700 link hover:text-gray-400" :to="link.to">
          {{ link.text }}
        </g-link> 
      </nav>
    </transition>
  </div>
</template>

<script>
import MenuIcon from '~/components/MenuIcon';
export default {
  name: 'SiteMenu',
  data() {
    return {
      active: false,
      links: [
        {
          text: 'Bio',
          to: '/bio'
        },
        {
          text: 'Events',
          to: '/events'
        },
        {
          text: 'Composer',
          to: '/composer'
        },
        {
          text: 'Performer',
          to: '/performer'
        },
        {
          text: 'Scholar',
          to: '/scholar'
        },
        {
          text: 'Albums',
          to: '/albums'
        },
        {
          text: 'Videos',
          to: '/videos'
        },
        {
          text: 'Press',
          to: '/press'
        },
        {
          text: 'Contact',
          to: '/contact'
        },
      ]
    }
  },
  components: { MenuIcon },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>