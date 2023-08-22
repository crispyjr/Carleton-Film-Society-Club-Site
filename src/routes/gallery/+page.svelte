<script>
    import image1 from '$lib/assets/stock1.jpg';
    import image2 from '$lib/assets/stock2.jpg';
    import image3 from '$lib/assets/stock3.jpg';
    import image4 from '$lib/assets/stock4.jpg';
    import image5 from '$lib/assets/stock5.jpg';
    const images = [
      {id: 0, alt: 'stock1', src: image1},
      {id: 1, alt: 'stock2', src: image2},
      {id: 2, alt: 'stock3', src: image3},
      {id: 3, alt: 'stock4', src: image4},
      {id: 4, alt: 'stock5', src: image5}
    ]
  </script>

<div class="navCover"></div>
<div class="galleryBox">
  <div class="photoBox" style="width:443px;height:776px;"></div>
  <div class="photoBox" style="width:443px;height:508px;"></div>
  <div class="photoBox" style="width:668px;height:508px;"></div>
  <div class="photoBox" style="width:637px;height:443px;"></div>
  <div class="photoBox" style="width:443px;height:776px;"></div>

</div>
<style>
  .navCover{
        width:100%;
        height:100px;
        background: rgb(165, 165, 165);
        opacity: 0.2;
        position: relative;
        box-shadow: 0px 2px 10px red;
    }
    .galleryBox{
      width:98%;
      height:1000px;
      position: relative;
      background: navy;
      margin:10px 0px 0px 10px;
      display:flex;
    }
    .photoBox{
      width:100px;
      height:100px;
      margin:10px;
      background: white;
    }
</style>

