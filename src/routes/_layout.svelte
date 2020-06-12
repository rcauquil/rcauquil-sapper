<script>
	import Nav from 'src/components/Nav.svelte';

	export let segment;
	const env = process.env.NODE_ENV;
</script>

<svelte:head>
  {#if env === 'production'}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-30137172-3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-30137172-3');
    </script>
  {/if}
</svelte:head>

<div class='container mx-auto py-6 px-4 sm:px-6 xl:px-32'>
  <Nav {segment}/>
</div>

<div class='container mx-auto py-6 px-2 sm:px-6 xl:px-32'>
  <slot></slot>
</div>