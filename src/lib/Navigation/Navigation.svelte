<script>
    import { home } from '$lib/assets/home.png';

    let nav = [
        {name: 'Sign Up', url: '/signup'},
        {name: 'Gallery', url: '/gallery'},
        {name: 'ayaya', url: '/', src: home},
        {name: 'About', url: '/about'},
        {name: 'Events', url: '/events'},
    ]

</script>

<div class="flex justify-center mx-auto space-x-4 bg-gray-800 ">
    {#each nav as link}
    {#if link.src}
        <a href={link.url}><img src={link.src} alt={link.name} class="h-6 w-auto"/></a>
    {:else}
        <a href={link.url} class="text-white">{link.name}</a>
    {/if}
    {/each}
</div>