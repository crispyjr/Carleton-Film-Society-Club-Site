<script>
  import image1 from '$lib/assets/stock2.jpg';

</script>

<div class="slideshow">
<img class="slideshowImage" src={image1}>
</div>
<div class="eventsBar"></div>

<style>
    .slideshow{
        width:100%;
        height:700px;
        background: green;
        position: relative;
        z-index: -1;
        border-style: dashed;
    }
    .slideshowImage{
        width:100%;
        height:100%;
    }
    .eventsBar{
        width:100%;
        height:500px;
        background: blue;
        position: relative;
    }
</style>