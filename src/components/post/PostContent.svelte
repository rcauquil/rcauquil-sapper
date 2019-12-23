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
  div :global(p) {
    @apply py-6;
  }
</style>

<div
  class='bg-gray-100 p-20'
  in:fly='{{ x: 40, duration: 500 }}'
  on:introstart='{_ => Prism.highlightAll()}'
>
  <slot></slot>
</div>