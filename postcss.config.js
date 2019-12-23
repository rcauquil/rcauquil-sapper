const cssNano = require('cssnano');
const autoprefixer = require('autoprefixer');

const purgeCSS = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.svelte',
    './src/**/*.html'
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    ...(process.env.NODE_ENV === 'production' ? [autoprefixer, purgeCSS, cssNano] : [])
  ]
};