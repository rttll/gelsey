<template>
  <header
    class="fixed top-0 left-0 z-40 flex items-start justify-between w-full p-4 bg-white"
    :class="classes"
    style="z-index: 99999"
  >
    <g-link class="block" to="/">
      <Logo class="h-16 md:h-24" />
    </g-link>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Logo from '~/assets/icons/Logo.svg';
import SiteMenu from '~/components/SiteMenu.vue';

export default {
  name: 'Header',
  components: { SiteMenu, Logo },
  data() {
    return {
      menuActive: false,
      classes: ''
    };
  },
  mounted() {
    // window.addEventListener('scroll', () => {
      
    // })
  }
};
</script>
