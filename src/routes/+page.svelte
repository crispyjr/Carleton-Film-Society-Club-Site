<script>
    import { CarouselTransition } from 'flowbite-svelte';
    let showThumbs=false;
  let showCaptions=false;
  let showIndicators=false;

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
