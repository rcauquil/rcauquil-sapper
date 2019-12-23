<script>
	import Nav from 'src/components/Nav.svelte';

	export let segment;
</script>

<div class='container mx-auto py-6'>
	<Nav {segment}/>
</div>

<main class='container mx-auto px-20 py-10'>
	<slot></slot>
</main>