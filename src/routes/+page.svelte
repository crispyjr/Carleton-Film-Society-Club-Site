<script>
    import logo1 from '$lib/assets/CFS_logo.png'
    let nav = [
        {name: 'Sign Up', bg: 'bg-red-500', right: 'right-[-65px]', top: 'top-10'},
        {name: '', bg: 'bg-black', right: 'right-[-230px]', top: 'top-10'},
        {name: 'Gallery', bg: 'bg-red-500', right: 'right-24', top: 'top-10'},
        {bname: 'About', bg: 'bg-red-300', right: 'right-64', top: 'top-10'},
        {name: 'Events', bg: 'bg-red-200', right: 'right-104', top: 'top-10'},
    ];
</script>

<div class="h-screen bg-gray-900">
    <nav class="relative overflow-hidden bg-white h-[180px] shadow-md flex items-center justify-around">
        <img src={logo1} class="h-[180px] absolute" alt="Logo">
        {#each nav as link}
            <div
                class="w-[250px] h-[160px] absolute bottom-0 transform skew-x-[-20deg] rotate-110 {nav.right} {nav.top} {nav.bg}">
                <p class="absolute -rotate-90 right-[-10px] top-20 text-3xl">
                    {link.name}
                </p>
            </div>
        {/each}
    </nav>

    <div class="w-full h-[600px] bg-red-500"></div>

    <div class="flex justify-start items-center h-[350px] mt-8 mx-8">
        <div class="w-1/2 h-full bg-red-300 rounded-lg shadow-lg relative top-8"></div>
        <div class="w-1/4 h-full bg-red-500 absolute right-8"></div>
    </div>
</div>
