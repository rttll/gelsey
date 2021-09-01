<template>
  <div
    class="w-full px-4 pt-32 mx-auto font-sans text-gray-800 container:px-0"
    style="max-width:1000px"
  >
    <Header />
      <transition name="fade" appear>
        <main>
          <slot />
        </main>
      </transition>
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
    margin: 0;
    padding: 0;
  }
  .fade-enter-active {
    transition: opacity .35s;
  }

  .fade-enter {
    opacity: 0;
  }

</style>
