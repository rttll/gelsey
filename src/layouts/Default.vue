<template>
  <div
    class="w-full mx-auto font-sans text-gray-800 container:px-0"
  >
    <transition name="fade" appear>
      <main v-if="false" class="relative z-20 min-h-screen bg-white border-b border-gray-50 mx-aut"
      >
        <section
          class="mx-auto"
          :style="style"
        >
          <slot />

        </section>
      </main>
    </transition>
    <div class="fixed top-0 left-0 flex flex-col items-stretch w-screen h-screen overflow-hidden border">
      <Header />
      <GridMenu />
    </div>
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
  },
  mounted() {
    this.$nextTick(() => {
      // disable saved scroll position
      // otherwise w/ browser back & bottom of the page, just shows grid nav
      document.documentElement.scrollTop = 0
    })
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
