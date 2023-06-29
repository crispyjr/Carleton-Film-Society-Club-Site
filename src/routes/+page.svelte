<script>
    import Card from '$lib/Card/Card.svelte';
    import Slideshow from '$lib/Slideshow/Slideshow.svelte';
    import image1 from '$lib/assets/stock1.jpg';
    import image2 from '$lib/assets/stock2.jpg';
    import image3 from '$lib/assets/stock3.jpg';
    import image4 from '$lib/assets/stock4.jpg';
    import image5 from '$lib/assets/stock5.jpg';
    let showThumbs=false
    let showCaptions=false
    let showIndicators=false
    const images = [
      {id: 0, attribution: 'stock1', imgurl: image1},
      {id: 1, attribution: 'stock2', imgurl: image2},
      {id: 2, attribution: 'stock3', imgurl: image3},
      {id: 3, attribution: 'stock4', imgurl: image4},
      {id: 4, attribution: 'stock5', imgurl: image5}
    ]

</script>

<div class="flex flex-col w-full h-screen">
    <div class="w-screen h-1/2 flex items-center justify-center space-x-4 bg-black">
        <div class="w-1/12"></div>
        <div class="w-1/2">
            <Slideshow />
        </div>
        <div class="w-1/12"></div>
    </div>
    <div class="flex justify-around items-center w-screen bg-custom-grey h-3/4">
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    <div class="w-screen bg-gray-900 h-3/4 p-6">
        <h1 class="text-yellow-400 text-4xl pt-4 pl-4">Carleton Film Society</h1>
        <p class="text-white pt-4 pl-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    
</div>
