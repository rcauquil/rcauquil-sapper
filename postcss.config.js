const cssNano = require('cssnano');
const autoprefixer = require('autoprefixer');

const purgeCSS = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.svelte',
    './src/**/*.html'
  ],
  // This is the function used to extract class names from your templates
  defaultExtractor: content => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    return broadMatches.concat(innerMatches)
  }
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    ...(process.env.NODE_ENV === 'production' ? [autoprefixer, purgeCSS, cssNano] : [])
  ]
};