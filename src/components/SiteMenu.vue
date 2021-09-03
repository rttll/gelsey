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

        <template v-for="link in links" @click="linkClicked" >
          <span v-if="link.to == $route.path" @click="toggle" class="block w-full p-4 py-2 pr-20 text-4xl text-gray-400 cursor-pointer link hover:text-gray-400">
            {{ link.text }}
          </span>
          <g-link v-else class="block w-full p-4 py-2 pr-20 text-4xl text-gray-700 link hover:text-gray-400" :to="link.to">
            {{ link.text }}
          </g-link>
        </template> 
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
    linkClicked(e) {
      console.log(e)
    }
  },
};
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>