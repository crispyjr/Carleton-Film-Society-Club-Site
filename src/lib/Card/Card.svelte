<script>
    import image1 from '$lib/assets/stock1.jpg';
</script>

<div class="flex flex-col bg-white border-4 border-black w-1/5 h-64 mx-auto drop-shadow-2xl">
    <div class="flex-shrink-0 h-2/3">
        <img class="h-full w-full object-cover" src={image1} alt="img">
    </div>
    <div class="px-6 py-4 h-1/3 bg-zinc-600">
        <div class="font-bold text-xl mb-2 text-white font-light">Event Name</div>
        <div class="text-gray-700 text-base text-white font-light">Event Description</div>
    </div>
</div>
