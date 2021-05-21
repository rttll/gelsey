<template>
  <div class="relative w-full p-2" style="height: 0; padding-bottom: 100%; ">
    <div
      class="absolute inset-0 z-20 flex flex-col justify-between w-full h-full"
    >
      <h3
        class="relative p-8 py-10 text-4xl transition-opacity duration-500 album-md:text-2xl md:text-4xl"
      >
        {{ album.title }}
      </h3>
      <p class="relative p-8 transition-opacity duration-500">
        <a :href="album.bandcamp">Bandcamp</a>
      </p>
    </div>
    <img
      :src="album.cover.asset.url"
      alt=""
      class="absolute inset-0 z-10 p-2"
    />
  </div>
</template>

<script>
export default {
  name: 'Album',
  props: { album: Object },
};
</script>

<style></style>
