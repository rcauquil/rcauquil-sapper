import { join } from "path";
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocessPostcss from 'svelte-preprocess-postcss';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import { mdsvex } from 'mdsvex';
import { merge } from 'lodash';
import conf from 'config';


// Env
const mode = process.env.NODE_ENV;
const dev = mode === 'development';

// Process the conf for rollup-replace
const mergedConf = merge({}, conf.all, conf[mode]);
const appConfig = Object.keys(mergedConf).reduce((o,c) => {
  o[`process.env.${c}`] = JSON.stringify(mergedConf[c]);
  return o;
}, {});

const onwarn = (warning, onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);
const dedupe = importee => importee === 'svelte' || importee.startsWith('svelte/');

const stylePreprocessor = sveltePreprocessPostcss({
  configFilePath: '',
  useConfigFile: true
});

// Add mdsvex
const svxPreprocessor = mdsvex({
  layout: {
    code: join(__dirname, './src/components/layouts/CodeLayout.svelte'),
    _: join(__dirname, './src/components/layouts/CodeLayout.svelte')
  }
});

// Export
export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      resolve({
        browser: true,
        dedupe
      }),

      alias({
        resolve: ['.js', '.svx', '.json', '.svelte'],
        entries: {
          src: __dirname + '/src'
        }
      }),

      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
        ...appConfig
      }),

      svelte({
        compilerOptions: {
          dev,
          hydratable: true,
        },
        extensions: ['.svelte', '.svx'],
        preprocess: [
          svxPreprocessor,
          { style: stylePreprocessor }
        ],
        emitCss: true
      }),

      commonjs(),

      babel({
        babelHelpers: 'runtime',
        extensions: ['.js', '.mjs', '.html', '.svelte', '.svx'],
        exclude: ['node_modules/@babel/**'],
        presets: [
          ['@babel/preset-env', {
            targets: '> 0.25%, not dead'
          }]
        ],
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          ['@babel/plugin-transform-runtime', {
            useESModules: true
          }]
        ]
      }),

      !dev && terser({
        module: true
      })
    ],
    onwarn
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      resolve({
        dedupe
      }),

      alias({
        resolve: ['.js', '.svx', '.json', '.svelte'],
        entries: {
          src: __dirname + '/src'
        }
      }),

      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
        ...appConfig
      }),

      svelte({
        compilerOptions: {
          dev,
          generate: 'ssr',
          css: css => {
            css.write(`static/styles/components.css`)
          }
        },
        emitCss: false,
        extensions: ['.svelte', '.svx'],
        preprocess: [
          svxPreprocessor,
          { style: stylePreprocessor }
        ]
      }),

      commonjs()
    ],

    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules || Object.keys(process.binding('natives'))
    ),

    onwarn
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      
      replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      
      commonjs(),
      
      !dev && terser()
    ],

    onwarn
  }
};
