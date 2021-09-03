<template>
  <div
    class="w-full px-4 pt-32 mx-auto font-sans text-gray-800 container:px-0"
  >
    <Header />
    <transition name="fade" appear>
      <main class="relative z-20 bg-white"
      >
        <section
          class="mx-auto"
          :style="style"
        >
          <slot />

        </section>
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
  name: 'NoFooter',
  components: { Header },
  data() {
    return {
      menuActive: false,
    };
  },
  computed: {
    style() {
      return `max-width: 1000px`
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
    transition: opacity .5s;
  }

  .fade-enter {
    opacity: 0;
  }  
</style>
