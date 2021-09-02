<template>
  <footer class="bottom-0 left-0 z-10 flex justify-center w-full border-t border-gray-300 ixed">
    <p class="py-4 text-xs text-gray-400">&copy; Gelsey Bell {{ year }}</p>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>

export default {
  name: 'Footer',
  data() {
    return {
      year: (new Date).getFullYear()
    }
  },
};
</script>
