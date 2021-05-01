module.exports = {
  purge: [
    'src/layout/*.vue',
    'src/pages/*.vue',
    'src/components/**/*.vue',
    'src/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'video-md': '1000px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
