<template>
  <header
    class="fixed top-0 left-0 z-40 flex items-center justify-between w-full p-4 bg-white"
  >
    <g-link class="block" to="/">
      <GelseyBell class="hidden w-52 md:block" />
      <GB class="block w-16 md:hidden" />
    </g-link>
    <SiteMenu />
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
import GelseyBell from "~/assets/svg-white/GelseyBell.svg";
import GB from "~/assets/GB.svg";
import SiteMenu from "~/components/SiteMenu.vue";

export default {
  name: "Header",
  components: { GelseyBell, SiteMenu, GB },
  data() {
    return {
      menuActive: false
    };
  }
};
</script>
