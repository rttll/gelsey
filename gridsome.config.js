// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

const postcssPlugins = [tailwind()];

// if (process.env.NODE_ENV === 'production')
// postcssPlugins.push(purgecss(require('./purgecss.config.js')));

const projectId = 'w3gbpmev';
const datasetName = 'production';

module.exports = {
  siteName: 'Gelsey Bell',
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: projectId,
        dataset: datasetName,
        // Token is only required if dataset is private
        // or `overlayDrafts` is set to true
        // token: '<tokenWithReadRights>',
        overlayDrafts: false,
        watchMode: true,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
