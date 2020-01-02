<script context='module'>
  export function preload({ params, query }) {
    return this.fetch('blog.json')
      .then(res => res.json())
      .then(data => {
        const years = Object.keys(data).reverse();
        const posts = years.reduce((o,c,i) => {
          o.set(c, Object.values(data[c]).reverse());
          return o;
        }, new Map())
        
        return {
          years,
          posts
        };
      });
  }
</script>

<script>
  import { beforeUpdate } from 'svelte';
  import { fly } from 'svelte/transition';
  import SectionTitle from 'src/components/SectionTitle.svelte';
  import PostItem from 'src/components/post/PostItem.svelte';

  export let years;
  export let posts;

  let count = 0;
  let setCount = () => count += 1;

  beforeUpdate(() => count = 0);
</script>

<svelte:head>
	<title>Blog - @rcauquil : design, code, electronic, food and diy</title>
	<meta name='description' content='Here I share thoughts, tutorials about design, code, electronic, food and everything you can make yourself !'>

  <meta property='og:url' content='{ process.env.site.url }/blog'>
  <meta property='og:title' content='Blog - @rcauquil : design, code, electronic, food and diy'>
  <meta property='og:description' content='Here I share thoughts, tutorials about design, code, electronic, food and everything you can make yourself !' />
  <meta property='og:type' content='website'>
  <meta property='og:image' content='ogimage.jpg'>
</svelte:head>

<main role='main'>
  <h1 class='text-important pb-2'>Blog - <small>@rcauquil</small></h1>
  <p class='text-white text-xl font-title pb-6'>Thoughts and tutorials about design, code, electronic, food and everything you can make yourself.</p>

  {#each years as year, i}
    <section class='{ i === 0 ? "mt-6" : "mt-12" }'>
      <SectionTitle i={setCount()} data={year} />
      
      {#each posts.get(year) as { attributes }}
        <PostItem i={setCount()} data={attributes} />
      {/each}
    </section>
  {/each}
</main>
