<template>
  <footer class="flex justify-end">
    <p class="py-4 text-xs">&copy; Gelsey Bell {{ year }}</p>
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
