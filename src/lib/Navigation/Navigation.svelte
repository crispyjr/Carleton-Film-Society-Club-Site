<script>
    // import logo from '$lib/assets/CFS_logo.png';

    // let nav = [
    //     {text: 'Sign-up', inset: 'inset-x-0', right: 'right-5', color: 'bg-red-400', link: 'https://forms.office.com/r/NkfFJxXmJ0'},
    //     {text: 'Gallery', inset: 'inset-x-1', right: 'right-5', color: 'bg-red-500', link: '/gallery'},
    //     {text: 'About', inset: 'inset-x-2', right: 'right-5', color: 'bg-red-600', link: '/about'},
    //     {text: 'Events', inset: 'inset-x-2', right: 'right-5', color: 'bg-red-700', link: '/events'},
    // ];
</script>


<!-- <div class="w-full h-52 bg-zinc-900 flex justify-between items-center px-8"> -->
    <!-- <a href="/">
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
    </div> -->
<!-- </div> -->
<link href='https://fonts.googleapis.com/css?family=Koulen' rel='stylesheet'>
<div class="navBar">
    <div class="navIcon"></div>
    <div class="navTextBar">
        <div class="navTextBarBox">events</div>
        <div class="navTextBarBox">about</div>
        <div class="navTextBarBox">gallery</div>
        <div class="navTextBarBox">Sign-up</div>
    </div>
    <div class="navIcon"></div>
</div>

<style>
    
    .navBar{
        width:100%;
        color: white;
        display: flex;
        
        justify-content: space-between;
        position: fixed;
        backdrop-filter: blur(10px);
        /* filter: blur(8px);
        -webkit-filter: blur(8px); */
    
        
    }
    .navIcon{
        width:7%;
        height:100px;
        
    }
    .navTextBar{
        width:50%;
        height:100px;
        display: flex;
        justify-content: space-around;
    }
    .navTextBarBox{
        width:20%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-family: 'Koulen';
        z-index: 2;
    }
    
</style>