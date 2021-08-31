<template>
  <div
    class="w-full px-4 py-32 mx-auto font-sans text-gray-800 container:px-0"
    :style="style"
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
  props: ['wide'],
  data() {
    return {
      menuActive: false,
    };
  },
  computed: {
    style() {
      let width = this.wide ? '1200px' : '1000px'
      return `max-width: ${width}`
    }
  }
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
