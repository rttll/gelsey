<template>
  <Layout class="">
    <div class="p-0 pt-6 md:p-56 md:pt-12">

    <div class="grid  grid-cols-3 md:grid-cols-3 lg:grid-cols-3 border-dashed border-b border-gray-200 ">
      <div class="border-r border-dashed border-gray-200 p-4 text-center">Bio</div>
      <div class="border-r border-dashed border-gray-200 p-4 text-center">Events</div>
      <div class=" border-dashed border-gray-200 p-4 text-center">Contact</div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 le-grid">
      <div class="border-r border-b border-dashed gorder-gray-200"><composer /></div>
      <div class="border-b md:border-r border-dashed gorder-gray-200"><performer /></div>
      <div class="border-r border-b md:border-r-0 border-dashed gorder-gray-200"><scholar /></div>
      <div class="border-b md:border-b-0 md:border-r border-dashed gorder-gray-200"><Albums /></div>
      <div class="border-r border-dashed gorder-gray-200"><videos /></div>
      <div class="border-dashed gorder-gray-200"><press /></div>
    </div>

      
    </div>

  </Layout>
</template>

<script>
import Albums from '~/assets/svg-white/Albums.svg'
import composer from '~/assets/svg-white/composer.svg'
import performer from '~/assets/svg-white/performer.svg' 
import press from '~/assets/svg-white/press.svg' 
import scholar from '~/assets/svg-white/scholar.svg' 
import videos from '~/assets/svg-white/videos.svg'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {  Albums, composer, performer, press, scholar, videos, }
}
</script>

<style>
  .svgfoo {
    display: block;
    width: 100%;
    height: auto;
    max-height: 50%;
  }
</style>
