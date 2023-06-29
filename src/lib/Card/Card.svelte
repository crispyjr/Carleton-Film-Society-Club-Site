<script>
    import image1 from '$lib/assets/stock1.jpg';
</script>

<div class="flex flex-col bg-white shadow-lg border-4 border-gray-600 w-1/5 h-64 mx-auto drop-shadow-lg">
    <div class="flex-shrink-0 h-2/3">
        <img class="h-full w-full object-cover" src={image1} alt="img">
    </div>
    <div class="px-6 py-4 h-1/3 bg-custom-grey">
        <div class="font-bold text-xl mb-2 text-white">Label 1</div>
        <div class="text-gray-700 text-base text-white">Label 2</div>
    </div>
</div>
