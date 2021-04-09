<template>
  <div>
    <MenuIcon @clicked="toggle" />
    <transition name="fade">
    <nav v-if="active" class="fixed w-screen h-screen z-40 bg-white right-0 top-0 flex flex-col items-center justify-center overflow-y-auto">
      <g-link class="p-4 py-2 block text-center text-3xl" to="/bio">Bio</g-link>
      <g-link class="p-4 py-2 block text-center text-3xl" to="/bio">Event</g-link>
      <g-link class="p-4 py-2 block text-center text-3xl" to="/bio">Contact</g-link>
      <g-link class="p-4 py-2 block text-center text-3xl" to="/bio">Composer</g-link>
      <g-link class="p-4 py-2 block text-center text-3xl" to="/bio">Performer</g-link>
      <g-link class="p-4 py-2 block text-center text-3xl" to="/bio">Scholar</g-link>
      <g-link class="p-4 py-2 block text-center text-3xl" to="/bio">Videos</g-link>
      <g-link class="p-4 py-2 block text-center text-3xl" to="/bio">Press</g-link>
    </nav>
    </transition>
  </div>
</template>

<script>
  import MenuIcon from '~/components/MenuIcon'
export default {
  name: 'SiteMenu',
  data() {
    return {
      active: false
    }
  },
  components: { MenuIcon, },
  methods: {
    toggle() {
      this.active = !this.active
      let bodyClassAction = this.active ? 'add' : 'remove'
      // document.getElementsByTagName('body')[0].classList[bodyClassAction]('overflow-hidden')
    }
  }
}
</script>

<style>

</style>