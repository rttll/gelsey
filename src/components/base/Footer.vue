<template>
  <footer class="bottom-0 left-0 z-10 flex justify-center w-full bg-gray-800 ixed">
    <p class="py-4 text-xs text-white">&copy; Gelsey Bell {{ year }}</p>
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
