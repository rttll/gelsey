<template>
  <div
    class="w-full mx-auto font-sans text-gray-800 pt-28 container:px-0"
  >
    <Header />
    <transition name="fade" appear>
      <main class="relative z-20 min-h-screen bg-white border-b border-gray-50 mx-aut"
      >
        <section
          class="mx-auto"
          :style="style"
        >
          <slot />

        </section>
      </main>
    </transition>
    <div class="h-screen"></div>
    <GridMenu />
    <!-- <Footer /> -->
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
import Footer from '../components/base/Footer.vue';
import GridMenu from '~/components/base/GridMenu'
export default {
  name: 'Default',
  components: { Header, Footer, GridMenu },
  props: ['wide', 'container'],
  data() {
    return {
      menuActive: false,
    };
  },
  computed: {
    style() {
      let width = this.wide ? '1200px' : '1000px'
      return this.container ? `max-width: ${width}` : ''
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
