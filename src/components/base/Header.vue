<template>
  <header
    class="flex items-start w-full p-4 bg-white "
    :class="classes"
  >
    <g-link class="block logo" to="/">
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

<style>
  .logo svg {
    width: 100%;
    display: block;
  }
</style>