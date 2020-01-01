<script>
  import { fly } from 'svelte/transition';

  export let i;
  export let data;
</script>

<h1
  class='border-l-4 border-important text-important text-3xl mb-4 pl-6'
  in:fly='{{ x: i % 2 ? -60 : 60, duration: 300, delay: i * 50 }}'
>
  { data }
</h1>