const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    'src/layout/*.vue',
    'src/pages/*.vue',
    'src/components/**/*.vue',
    'src/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Libre Franklin', 'sans-serif'],
      display: ['Fraunces72pt', 'Georgia', 'Cambria', 'serif'],
    },
    screens: {
      container: [{ min: '1050px' }],
      'album-md': '450px',
      'video-md': '1000px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
