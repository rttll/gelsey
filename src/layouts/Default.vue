<template>
  <div
    class="w-full pt-32 mx-auto font-sans text-gray-800"
    style="max-width:1000px"
  >
    <Header />
    <slot />
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
import Header from '../components/base/Header.vue';

export default {
  name: 'Default',
  components: { Header },
  data() {
    return {
      menuActive: false,
    };
  },
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
