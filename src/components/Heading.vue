<template>
  <div>
    <h1 v-if="el === 'h1'" :class="classes">
      <slot />
    </h1>
    <h2 v-if="el === 'h2'" :class="classes">
      <slot />
    </h2>
    <h3 v-if="el === 'h3'" :class="classes">
      <slot />
    </h3>
    <h4 v-if="el === 'h4'" :class="classes">
      <slot />
    </h4>
    <h5 v-if="el === 'h5'" :class="classes">
      <slot />
    </h5>
    <h6 v-if="el === 'h6'" :class="classes">
      <slot />
    </h6>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    display: Boolean,
    tag: String,
  },
  data() {
    return {
      el: 'h1',
      classes: 'text-2xl text-gray-900',
    };
  },
  created() {
    if (this.tag) this.el = this.tag;
    if (this.display) {
      this.classes =
        'text-5xl pb-4 md:pb-10 font-thin text-gray-400 uppercase md:text-7xl font-display';
    }
  },
};
</script>

<style></style>
