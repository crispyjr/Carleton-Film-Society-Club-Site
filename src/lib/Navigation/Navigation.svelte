<script>
    import logo from '$lib/assets/CFS_logo.png';

    let nav = [
        {text: 'Sign-up', inset: 'inset-x-0', right: 'right-5', color: 'bg-red-400', link: 'https://forms.office.com/r/NkfFJxXmJ0'},
        {text: 'Gallery', inset: 'inset-x-1', right: 'right-5', color: 'bg-red-500', link: '/gallery'},
        {text: 'About', inset: 'inset-x-2', right: 'right-5', color: 'bg-red-600', link: '/about'},
        {text: 'Events', inset: 'inset-x-2', right: 'right-5', color: 'bg-red-700', link: '/events'},
    ];
</script>


<div class="w-full h-52 bg-zinc-900 flex justify-between items-center px-8">
    <a href="/">
    <img src={logo} alt="logo" class="h-52 w-auto">
    </a>
        <div class="flex -space-x-12">
        {#each nav as n}
        <a href={n.link}>
            <div class="w-52 h-36 skew-x-20 {n.color} rotate-110">
                <p class="absolute right-0 {n.inset} {n.right} transform translate-x-1/2 rotate-270 text-2xl text-white">{n.text}</p>
            </div>
        </a>
        {/each}
    </div>
</div>