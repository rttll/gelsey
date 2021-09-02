<template>
  <blockquote
    class="relative py-16 text-lg text-center text-gray-600 md:text-xl md:w-1/2 md:px-0"
  >
    <!-- <span
      class="absolute pt-16 text-6xl text-gray-400"
      style="top: -2rem; left:-1rem; font-family: Georgia"
      >"</span
    > -->
    <BlockContent :blocks="quote" />
    <div class="flex justify-end">
      <cite class="inline-block pt-4 text-sm"> &mdash; {{ cite }}</cite>
    </div>
  </blockquote>
</template>

<script>
export default {
  name: 'BlockQuote',
  props: {
    quote: Array,
    cite: String,
  },
};
</script>
