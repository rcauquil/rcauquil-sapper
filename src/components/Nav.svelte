<script>
	import Logo from 'src/components/Logo.svelte';

	export let segment;
</script>

<style>
	a {
		color: inherit;
		font-size: 1.5em;
		text-decoration: none;
	}
</style>

<nav class='flex items-center justify-between h-10 my-1 text-important'>
	<a style='height:100%' class:selected='{segment === undefined}' href='.'>
		<Logo />
	</a>

	<a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a>
</nav>
