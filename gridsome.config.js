// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

const postcssPlugins = [tailwind()];

// if (process.env.NODE_ENV === 'production')
// postcssPlugins.push(purgecss(require('./purgecss.config.js')));

const isProduction = process.env.NODE_ENV === 'production';

const projectId = 'w3gbpmev';
const datasetName = isProduction ? 'production' : 'development';

const loaders = (config) => {
  const svgRule = config.module.rule('svg');
  svgRule.uses.clear();
  svgRule.use('vue-svg-loader').loader('vue-svg-loader');
};

module.exports = {
  siteName: 'Gelsey Bell',
  chainWebpack: (config) => {
    loaders(config);
  },
  runtimeCompiler: true,
  templates: {
    SanityWork: [
      {
        component: './src/templates/Work.vue',
        path: (node) => {
          let slug = node.title.replace(/./g, (match) => {
            return /[a-z|A-Z]/.test(match) ? match.toLowerCase() : '-';
          });
          return '/composer/' + slug;
        },
      },
    ],
  },
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: projectId,
        dataset: datasetName,
        overlayDrafts: false,
        watchMode: process.env.NODE_ENV === 'development',
        graphqlTag: 'default',
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-56707908-1',
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
