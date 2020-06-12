<script>
  import { fly } from 'svelte/transition';
  import Date from 'src/components/Date.svelte';
  import Tags from 'src/components/Tags.svelte';
  import Icon from 'src/components/Icon.svelte';
  import { faCode } from '@fortawesome/free-solid-svg-icons';
  
  export let title;
  export let description;
  export let date;
  export let tags;
  export let slug;
  export let ogImage = 'ogimage.jpg';
  const { siteName, url } = process.env.site;
</script>

<style>
  main :global(a) {
    @apply font-body text-important font-bold;
  }

  main :global(a:hover) {
    @apply underline;
  }

  main :global(h2) {
    @apply text-4xl font-light py-6;
  }

  main :global(h3) {
    @apply text-3xl font-light py-4;
  }

  main :global(h4) {
    @apply text-2xl font-light py-4;
  }

  main :global(p) {
    @apply text-lg font-light pb-8 leading-relaxed;
  }

  main :global(pre) {
    @apply mb-4;
  }

  main :global(code:not([class])) {
    @apply bg-gray-200 text-gray-700 px-2 py-1 text-sm;
    border-radius: 0.3em;
  }

  main :global(blockquote) {
    @apply border-l-4 border-important px-6 pt-4 pb-6 mt-1 mb-8 text-gray-600 italic;
  }

  main :global(blockquote p) {
    @apply p-0;
  }

  main :global(ul) {
    @apply text-base font-light pb-6 list-disc list-inside pl-4;
  }
  main :global(ul ul) {
    @apply pb-0;
  }
  main :global(li) {
    @apply py-2;
  }

  main :global(img) {
    @apply m-auto p-2;
  }
</style>

<svelte:head>
	<title>{ title }</title>
  <meta name='description' content='{ description }' />
  <meta property='og:url' content='{`${url}/blog/${slug}`}' />
  <meta property='og:description' content='{ description }' />
  <meta property='og:title' content='{`${title} - ${siteName}`}' />
  <meta property='og:type' content='website' />
  <meta property='og:image' content='{`${url}/${ogImage}`}' />
  <link rel='stylesheet' href='styles/prism-okaidia.min.css'>
</svelte:head>

<header
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
</header>

<main
  class='bg-gray-100 px-4 py-8 sm:p-20'
  in:fly='{{ x: 40, duration: 500 }}'  
>
  <div class='text-center mb-12'>
    <Icon class='text-important text-3xl' icon={ faCode }/>
  </div>
  <slot></slot>
</main>