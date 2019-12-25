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
  div :global(a) {
    @apply font-body text-important font-bold;
  }

  div :global(a:hover) {
    @apply underline;
  }

  div :global(h2) {
    @apply text-4xl font-light py-6;
  }

  div :global(h3) {
    @apply text-3xl font-light py-4;
  }

  div :global(p) {
    @apply text-lg font-light pb-8 leading-relaxed;
  }

  div :global(pre) {
    @apply mb-4;
  }

  div :global(blockquote) {
    @apply border-l-4 border-important px-6 pt-4 pb-6 mt-1 mb-8 text-gray-600 italic;
  }

  div :global(blockquote p) {
    @apply p-0;
  }

  div :global(ul) {
    @apply text-base font-light pb-6 list-disc list-inside pl-4;
  }
  div :global(li) {
    @apply py-2;
  }

  div :global(img) {
    @apply m-auto p-2;
  }
</style>

<div
  class='bg-gray-100 p-20'
  in:fly='{{ x: 40, duration: 500 }}'
  on:introstart='{_ => Prism.highlightAll()}'
>
  <slot></slot>
</div>