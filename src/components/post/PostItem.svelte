<script>
  import { fly } from 'svelte/transition';
  import Date from 'src/components/Date.svelte';
  import Tags from 'src/components/Tags.svelte';
  import ReadMore from 'src/components/ReadMore.svelte';

  export let i;
  export let data;
</script>

<article
  in:fly='{{ x: i % 2 ? -60 : 60, duration: 500, delay: i * 50 }}'
  class='shadow-md bg-gray-100 rounded-lg py-5 px-10 my-5 first:mt-0 last:mb-0'
>
  <h2 class='font-light leading-snug text-3xl'>
    {data.title}
  </h2>

  <div class='flex items-center py-1'>
    <Date data='{data.date}'/>
    <Tags data='{data.tags}'/>
  </div>

  <p class='py-4'>
    { data.description }
  </p>

  <ReadMore link='blog/{data.date.split('-')[0]}/{data.slug}'/>
</article>