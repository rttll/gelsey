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
    border: {
      type: Boolean,
      default: true
    },
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
        'text-5xl relative text-gray-600 uppercase md:text-8xl font-display';
      if (this.border) this.classes += ' border-b border-gray-200'
    }
  },
};
</script>

<style>
  .display:after {
    content: '';
    background: rgba(75, 85, 99, 1);
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 0;

    /* transform: translateY(14px) */
  }
</style>

