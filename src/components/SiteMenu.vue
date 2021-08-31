<template>
  <div>
    <MenuIcon @clicked="toggle" />
    <transition name="slide-left">
      <nav
        v-if="active"
        class="fixed top-0 right-0 z-40 flex flex-col justify-center h-screen pl-20 overflow-x-hidden overflow-y-auto"
      >
        <g-link class="link" to="/bio">
          Bio
        </g-link>
        <g-link class="link" to="/events"> Events</g-link>
        <g-link class="link" to="/composer">
          Composer
        </g-link>
        <g-link class="link" to="/performer">
          Performer
        </g-link>
        <g-link class="link" to="/scholar">
          Scholar
        </g-link>
        <g-link class="link" to="/videos/">
          Videos
        </g-link>
        <g-link class="link" to="/press/">
          Press
        </g-link>
        <g-link class="link" to="/contact">
          Contact
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
    };
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
.link {
  @apply block p-4 py-2 pr-20 text-3xl text-right;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: 0.2s;
  transform: translate3d(0px, 0, 0);
}
.slide-left-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate3d(50px, 0, 0);
}
</style>
