<script>
  import { fly } from 'svelte/transition';
  import Date from 'src/components/Date.svelte';
  import Tags from 'src/components/Tags.svelte';
  
  export let data;
  const { title, date, tags } = data;
</script>

<div
  class='text-gray-100 py-10'
  in:fly='{{ x: -40, duration: 500 }}'
>
  <h1 class='text-important text-5xl font-light leading-snug pb-4'>
    { title }
  </h1>
  
  <div class='flex items-center py-1'>
    <Date data='{ date }'/>
    <Tags data='{ tags }'/>
  </div>
</div>