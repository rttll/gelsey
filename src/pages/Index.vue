<template>
  <Layout class="">
    <div class="p-0 pt-6">
      <div
        class="grid grid-cols-3 border-b border-gray-200 border-dashed md:grid-cols-3 lg:grid-cols-3 "
      >
        <div class="p-4 text-center border-r border-gray-200 border-dashed">
          Bio
        </div>
        <div class="p-4 text-center border-r border-gray-200 border-dashed">
          Events
        </div>
        <div class="p-4 text-center border-gray-200 border-dashed ">
          Contact
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 le-grid">
        <div class="border-b border-r border-dashed gorder-gray-200">
          <composer />
        </div>
        <div class="border-b border-dashed md:border-r gorder-gray-200">
          <performer />
        </div>
        <div
          class="border-b border-r border-dashed md:border-r-0 gorder-gray-200"
        >
          <scholar />
        </div>
        <div
          class="border-b border-dashed md:border-b-0 md:border-r gorder-gray-200"
        >
          <g-link to="/albums/">
            <albums />
          </g-link>
        </div>
        <div class="border-r border-dashed gorder-gray-200">
          <g-link to="/videos/">
            <videos />
          </g-link>
        </div>
        <div class="border-dashed gorder-gray-200">
          <g-link to="/press/"> <press /></g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import albums from '~/assets/svg-white/albums.svg';
import composer from '~/assets/svg-white/composer.svg';
import performer from '~/assets/svg-white/performer.svg';
import press from '~/assets/svg-white/press.svg';
import scholar from '~/assets/svg-white/scholar.svg';
import videos from '~/assets/svg-white/videos.svg';

export default {
  metaInfo: {
    title: 'Home',
  },
  components: { albums, composer, performer, press, scholar, videos },
};
</script>

<style>
.svgfoo {
  display: block;
  width: 100%;
  height: auto;
  max-height: 50%;
}
</style>
