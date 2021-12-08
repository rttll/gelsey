<template>
  <div
    class="w-full mx-auto font-sans text-gray-800 container:px-0"
  >
    <transition name="fade" appear>
      <main 
        v-if="showMain" 
        class="relative z-10 min-h-screen pb-24 bg-white"
      >
        <Header />
        <section
          class="mx-auto"
          :style="style"
        >
          <slot />
        </section>
      </main>
    </transition>
    <section 
      class="top-0 left-0 flex flex-col items-stretch full md:pb-12 pb-28"
    >
      <Header v-if="!showMain" />
      <GridMenu />
    </section>
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
    },
    showMain() {
      return this.$route.path !== '/'
    }
  },
  mounted() {
    this.$nextTick(() => {
      // disable saved scroll position
      // otherwise w/ browser back & bottom of the page, just shows grid nav
      document.documentElement.scrollTop = 0;


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
