<script>
  import { fly } from 'svelte/transition';
  import Date from 'src/components/Date.svelte';
  import Tags from 'src/components/Tags.svelte';
  
  export let data;
  const { title, date, tags, ogImage } = data;
  const { siteName, url } = process.env.site;
</script>

<svelte:head>
	<title>{ title } - { siteName }</title>
  <!-- TODO: get the excerpt for description -->
	<!-- <meta name='description' content='{ process.env.site.description }'> -->

  <meta property='og:url' content='{ url }'>
  <!-- <meta property='og:description' content='{ process.env.site.description }' /> -->
  <meta property='og:title' content='{`${title} - ${siteName}`}'>
  <meta property='og:type' content='website'>
  <meta property='og:image' content='{ url + '/' + ogImage }'>
</svelte:head>

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