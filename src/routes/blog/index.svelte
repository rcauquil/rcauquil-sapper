<script context='module'>
  export function preload({ params, query }) {
    return this.fetch('blog.json')
      .then(res => res.json())
      .then(posts => {
        return {
          posts: posts.reverse()
        };
      });
  }
</script>

<script>
  import { fly } from 'svelte/transition';
  import Date from 'src/components/Date.svelte';
  import Tags from 'src/components/Tags.svelte';
  import ReadMore from 'src/components/ReadMore.svelte';

  export let posts;
</script>

<svelte:head>
	<title>{ process.env.site.title } - blog</title>
	<meta name='description' content='{ process.env.site.description }'>

  <meta property='og:url' content='{ process.env.site.url }'>
  <meta property='og:description' content='{ process.env.site.description }' />
  <meta property='og:title' content='{ process.env.site.title }'>
  <meta property='og:type' content='website'>
  <meta property='og:image' content='ogimage.jpg'>
</svelte:head>

{#each posts as post, i}
  <div
    in:fly='{{ x: i % 2 ? -60 : 60, duration: 500, delay: i * 50 }}'
    class='shadow-md bg-gray-100 rounded-lg py-5 px-10 my-5 first:mt-0 last:mb-0'
  >
    <h1 class='font-medium leading-snug'>
      {post.title}
    </h1>

    <div class='flex items-center py-1'>
      <Date data='{post.date}'/>
      <Tags data='{post.tags}'/>
    </div>

    <ReadMore link='blog/{post.category}/{post.slug}'/>
  </div>
{/each}
