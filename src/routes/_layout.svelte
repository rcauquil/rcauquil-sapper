<script>
	import Nav from 'src/components/Nav.svelte';

	export let segment;
</script>

<div class='container mx-auto py-6 px-4 sm:px-6 xl:px-32'>
	<Nav {segment}/>
</div>

<div class='container mx-auto py-6 px-2 sm:px-6 xl:px-32'>
	<slot></slot>
</div>