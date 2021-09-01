<template>
  <a
    href="#"
    :class="`${active ? 'bg-gray-100' : 'bg-gray-50'} relative hover:bg-gray-100 transition-colors duration-300 flex p-4 py-6 rounded-full cursor-pointer`"
    style="z-index: 999999999"
    @click.prevent="clicked"
  >
    <div
      :class="
        `flex flex-col justify-between h-3 w-7 menu ${active ? 'active' : ''}`
      "
    >
      <span class="block bg-gray-500"></span>
      <span class="block bg-gray-500"></span>
      <span :class="`block bg-gray-500 ${active && 'opacity-0'} `"></span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'MenuIcon',
  data() {
    return {
      active: false,
    };
  },
  methods: {
    clicked() {
      this.active = !this.active;
      this.$emit('clicked');
    },
  },
};
</script>

<style>
.menu span {
  @apply transform transition-all origin-center duration-75 ease-in;
  height: 0.1rem;
}

.menu.active span:first-child {
  transform: rotate(-45deg) translate3d(-4px, 3px, 0);
}
.menu.active span:first-child + span {
  transform: rotate(45deg);
}
</style>
