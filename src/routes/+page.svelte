<script>
    import { CarouselTransition } from 'flowbite-svelte';
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
    <div class="w-screen h-3/4 flex space-x-4 bg-black">
        <div class="flex-none w-1/6"></div>
        
        <div class="flex-grow flex items-center justify-center max-w-4xl">
            <CarouselTransition {images} loop {showThumbs} {showCaptions} {showIndicators} transitionType="fly" transitionParams="{{delay: 250, duration: 300, x: 100}}"/>
        </div>
        <div class="flex-none w-1/6"></div>
    </div>
    <div class="w-screen bg-red-300 h-1/2">
        <p class="text-white text-center">Div 2</p>
    </div>
    <div class="w-screen bg-green-300 h-1/2">
        <p class="text-white text-center">Div 3</p>
    </div>
</div>
