<template>
  <a href="#" class="block w-7 h-5 relative cursor-pointer z-50" @click.prevent="clicked">
    <span class="block h-1 bg-gray-500 absolute top-0 left-0 right-0"></span>
    <span class="block h-1 bg-gray-500 absolute left-0 right-0 transform translate-y-2"></span>
    <span class="block h-1 bg-gray-500 absolute bottom-0 left-0 right-0"></span>
  </a>
</template>

<script>
export default {
  name: 'MenuIcon',
  data() {
    return {
      active: false
    }
  },
  methods: {
    clicked() {
      this.active = !this.active;
      this.$emit('clicked')
    }
  }
}
</script>

<style>

</style>