<script>
    import { Gallery } from 'flowbite-svelte'
    import image1 from '$lib/assets/stock1.jpg';
    import image2 from '$lib/assets/stock2.jpg';
    import image3 from '$lib/assets/stock3.jpg';
    import image4 from '$lib/assets/stock4.jpg';
    import image5 from '$lib/assets/stock5.jpg';
    // let showThumbs=false
    // let showCaptions=false
    // let showIndicators=false
    const images = [
      {id: 0, alt: 'stock1', src: image1},
      {id: 1, alt: 'stock2', src: image2},
      {id: 2, alt: 'stock3', src: image3},
      {id: 3, alt: 'stock4', src: image4},
      {id: 4, alt: 'stock5', src: image5}
    ]
  </script>
<div class="flex items-center justify-center min-h-screen bg-gray-200">
    <div class="bg-white shadow-lg rounded-lg px-5 py-5 md:w-3/4 w-full">
        <h1 class="flex justify-center items-center font-light text-4xl pb-2">Gallery</h1>
        <Gallery class="gap-4 grid-cols-3" items={images} let:item>
            <div class="ring-4 ring-red-600 dark:ring-red-400 p-1">
              <img src={item.src} alt={item.alt} class="h-auto max-w-full" />
            </div>
          </Gallery>
    </div>
</div>
