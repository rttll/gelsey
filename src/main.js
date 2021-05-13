// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('~/main.css');

// https://fontsource.org/fonts/libre-franklin
import '@fontsource/libre-franklin/400.css';

import DefaultLayout from '~/layouts/Default.vue';
import Heading from '~/components/Heading.vue';

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);
  Vue.component('Heading', Heading);
}
