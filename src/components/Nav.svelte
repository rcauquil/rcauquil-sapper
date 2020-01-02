<script>
	import Logo from 'src/components/Logo.svelte';
	import Icon from 'src/components/Icon.svelte';
	import { faCode } from '@fortawesome/free-solid-svg-icons';
	import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

	export let segment;
</script>

<style>
	.nav-links a {
		@apply pl-2;	
	}

	a {
		color: inherit;
		font-size: 1.5em;
		text-decoration: none;
	}
</style>

<nav class='flex items-center justify-between h-6 sm:h-8 my-1 text-important'>
	<a style='height:100%' class:selected='{segment === undefined}' href='.'>
		<Logo />
	</a>

	<div class='nav-links'>
		<!-- Instagram -->
		<a href='https://instagram.com/rcauquil' title='Instagram account - @rcauquil' target='_blank'>
			<Icon icon={ faInstagram }/>
		</a>
		<!-- Linkedin -->
		<a href='https://www.linkedin.com/in/romain-cauquil-b642aa40/' title='Linkedin account - Romain Cauquil' target='_blank'>
			<Icon icon={ faLinkedin }/>
		</a>		
		<!-- Blog -->
		<a rel=prefetch class:selected='{segment === "blog"}' href='blog' title='Blog posts about code'>
			<small>blog</small>
		</a>
	</div>
</nav>
