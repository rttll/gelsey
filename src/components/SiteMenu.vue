<template>
  <div>
    <MenuIcon @clicked="toggle" />
    <transition name="fade">
      <nav
        v-if="active"
        class="fixed top-0 right-0 z-40 flex flex-col items-center justify-center w-screen h-screen overflow-y-auto bg-white"
      >
        <g-link class="block p-4 py-2 text-3xl text-center" to="/bio"
          >Bio</g-link
        >
        <g-link class="block p-4 py-2 text-3xl text-center" to="/bio"
          >Event</g-link
        >
        <g-link class="block p-4 py-2 text-3xl text-center" to="/bio"
          >Composer</g-link
        >
        <g-link class="block p-4 py-2 text-3xl text-center" to="/bio"
          >Performer</g-link
        >
        <g-link class="block p-4 py-2 text-3xl text-center" to="/bio"
          >Scholar</g-link
        >
        <g-link class="block p-4 py-2 text-3xl text-center" to="/videos/"
          >Videos</g-link
        >
        <g-link class="block p-4 py-2 text-3xl text-center" to="/press/"
          >Press</g-link
        >
        <g-link class="block p-4 py-2 text-3xl text-center" to="/bio"
          >Contact</g-link
        >
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
      let bodyClassAction = this.active ? 'add' : 'remove';
      // document.getElementsByTagName('body')[0].classList[bodyClassAction]('overflow-hidden')
    },
  },
};
</script>

<style></style>
