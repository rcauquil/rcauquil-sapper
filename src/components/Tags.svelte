<script>
  export let data;
</script>

<ul class='flex'>
  {#each data as d}
    <li class='py-0 px-1 m-1 first:ml-0 last:mr-0 bg-important text-xs text-gray-900 font-normal font-title rounded whitespace-no-wrap'>
      {d}
    </li>
  {/each}
</ul>