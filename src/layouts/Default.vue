<template>
  <div class="w-full pt-12">
    <header class="fixed top-0 left-0 flex justify-between items-center bg-white p-4 w-full">
      <g-link class="block" to="/">
        <GelseyBell class="block w-52 hidden md:block" />
        <GB class="block w-16 md:hidden" />
      </g-link>
      <SiteMenu />
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import GelseyBell from '~/assets/svg-white/GelseyBell.svg'
  import GB from '~/assets/GB.svg'
  import SiteMenu from '../components/SiteMenu.vue'

  export default {
    name: 'Default',
    components: { GelseyBell, SiteMenu, GB},
    data() {
      return {
        menuActive: false
      }
    }
  }
</script>



<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}


</style>
