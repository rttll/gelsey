<template>
  <Layout class="">
    <div class="p-0 pt-6">
      <div
        class="grid grid-cols-3 border-b border-gray-200 border-dashed md:grid-cols-3 lg:grid-cols-3 "
      >
        <div class="text-center border-r border-gray-200 border-dashed">
          <g-link to="/bio/" class="block w-auto h-12 p-2 small">
            <component is="bio" />
          </g-link>
        </div>
        <div class="text-center border-r border-gray-200 border-dashed">
          <g-link to="/events/" class="block w-auto h-12 p-2 small">
            <events />
          </g-link>
        </div>
        <div class="text-center border-gray-200 border-dashed ">
          <g-link to="/contact/" class="block w-auto h-12 p-2 small">
            <contact />
          </g-link>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <div class="border-b border-r border-dashed gorder-gray-200">
          <g-link to="/composer/">
            <composer />
          </g-link>
        </div>
        <div class="border-b border-dashed md:border-r gorder-gray-200">
          <g-link to="/performer/">
            <performer />
          </g-link>
        </div>
        <div
          class="border-b border-r border-dashed md:border-r-0 gorder-gray-200"
        >
          <g-link to="/scholar/">
            <scholar />
          </g-link>
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
import albums from '~/assets/nav/white/albums.svg';
import composer from '~/assets/nav/white/composer.svg';
import performer from '~/assets/nav/white/performer.svg';
import press from '~/assets/nav/white/press.svg';
import scholar from '~/assets/nav/white/scholar.svg';
import videos from '~/assets/nav/white/videos.svg';
import bio from '~/assets/nav/white/bio.svg';
import events from '~/assets/nav/white/events.svg';
import contact from '~/assets/nav/white/contact.svg';

export default {
  metaInfo: {
    title: 'Home',
  },
  components: {
    albums,
    composer,
    performer,
    press,
    scholar,
    videos,
    bio,
    events,
    contact,
  },
};
</script>

<style>
.svgfoo {
  display: block;
  width: 100%;
  height: auto;
  max-height: 50%;
}
.small svg {
  height: 100%;
  margin: auto;
}
</style>
