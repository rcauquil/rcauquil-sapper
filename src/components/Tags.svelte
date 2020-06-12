<script>
  export let data;
</script>

<style>
  li {
    padding: 0.15rem 0.4rem
  }
</style>

<ul class='hidden sm:flex'>
  {#each data as d}
    <li class='m-1 first:ml-0 last:mr-0 bg-important text-xs text-gray-800 font-normal font-title rounded whitespace-no-wrap'>
      {d}
    </li>
  {/each}
</ul>