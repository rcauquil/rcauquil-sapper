<script>
  import { fly } from 'svelte/transition';
  import Prism from 'prismjs';
  import 'prismjs/themes/prism-okaidia.css';
  import 'prismjs/components/prism-c';
  import 'prismjs/components/prism-bash';
  import 'prismjs/components/prism-json';
  import 'prismjs/components/prism-yaml';	
</script>

<style>
  div :global(h2) {
    @apply text-4xl font-light py-6;
  }

  div :global(h3) {
    @apply text-3xl font-light py-4;
  }

  div :global(p) {
    @apply text-lg font-light pb-8;
  }

  div :global(pre) {
    @apply mb-4;
  }
</style>

<div
  class='bg-gray-100 p-20'
  in:fly='{{ x: 40, duration: 500 }}'
  on:introstart='{_ => Prism.highlightAll()}'
>
  <slot></slot>
</div>