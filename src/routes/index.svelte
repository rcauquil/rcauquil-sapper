<script>
	import Icon from 'src/components/Icon.svelte';
  import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
  
  const { title, description, siteName, url } = process.env.site;
</script>

<style>
  #intro {
    position: absolute;
    top: 50%;
    margin-top: -65px;
  }
</style>

<svelte:head>
	<title>{ title }</title>
	<meta name='description' content='{description}' />

  <meta property='og:url' content='{url}' />
  <meta property='og:description' content='{description}' />
  <meta property='og:title' content='{ title }' />
  <meta property='og:type' content='website' />
  <meta property='og:image' content='{`${url}/ogimage.jpg`}' />
</svelte:head>

<div id='intro' class='text-white font-title'>
  <div class='text-5xl sm:text-7xl leading-none'>
    <span class='font-light'>CREA</span><span class='font-normal'>TIVE</span>
  </div>

  <div class='flex flex-col sm:flex-row sm:items-center'>
    <span class='ml-1 font-prata text-2xl sm:text-4xl'>
      technologist
    </span>

    <span class='ml-1 sm:ml-4 text-important text-sm sm:text-lg flex items-center'>
      <Icon icon={ faMapMarker }/> <span class='ml-1'>Toulouse, France</span>
    </span>
  </div>
</div>