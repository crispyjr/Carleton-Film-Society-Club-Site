<script>
    import Card from '$lib/Card/Card.svelte';
    import Slideshow from '$lib/Slideshow/Slideshow.svelte';
    import Discord from "svelte-material-icons/Discord.svelte";
    import Youtube from "svelte-material-icons/Youtube.svelte";
    import Facebook from "svelte-material-icons/Facebook.svelte";
    import Instagram from "svelte-material-icons/Instagram.svelte";

    export let width = 50;
    export let height = 50;
    export let color = "white";
</script>

<div class="flex flex-col w-full h-screen overflow-auto">
    <div class="flex items-center justify-center bg-black h-1/2">
        <div class="w-1/12"></div>
        <div class="w-1/2">
            <Slideshow />
        </div>
        <div class="w-1/12"></div>
    </div>
    <div class="flex flex-col justify-around bg-zinc-800 h-1/2">
        <h1 class="text-white text-4xl pt-4 pl-4 pb-4">Upcoming Events</h1>
        <div class="flex justify-around items-center">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
    
    <div class="bg-zinc-800 h-3/4">
        <div class="flex justify-between items-center w-full">
            <h1 class="text-yellow-400 text-4xl pt-4 pl-4">Carleton Film Society</h1>
            <div class="flex space-x-4 pr-8">
                <Discord {width} {height} {color}/>
                <Instagram {width} {height} {color}/>
                <Facebook {width} {height} {color}/>
                <Youtube {width} {height} {color}/>
            </div>
        </div>
        <p class="text-white pt-4 pl-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    
</div>