<script>
	import Icon from 'src/components/Icon.svelte';
	import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
</script>

<svelte:head>
	<title>{ process.env.site.title }</title>
	<meta name='description' content='{ process.env.site.description }'>

  <meta property='og:url' content='{ process.env.site.url }'>
  <meta property='og:description' content='{ process.env.site.description }' />
  <meta property='og:title' content='{ process.env.site.title }'>
  <meta property='og:type' content='website'>
  <meta property='og:image' content='ogimage.jpg'>
</svelte:head>

<div id='homepage'>
  <h1><span class='text-important'>CREA<span class='bold'>TIVE</span></span></h1>
  <div class='baseline'>
    <h2>technologist</h2>
    <p class='baseline-place'><Icon icon={ faMapMarker }/> <span>Toulouse, France</span></p>
  </div>
</div>