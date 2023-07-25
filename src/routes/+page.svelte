<script>
  import image1 from '$lib/assets/stock2.jpg';
   import { images } from './imageData.js';
  
    let imageShowIndex = 0;
    $: console.log(imageShowIndex)

    const prevSlide = () => {
        console.log("bruh")
        if(imageShowIndex==0){
            imageShowIndex = images.length-1;
        }
        else{
            imageShowIndex-=1;
        }
    }

    const nextSlide = () => {
        if(imageShowIndex==images.length-1){
            imageShowIndex=0;
        }
        else{
            imageShowIndex+=1;
        }
    }
</script>

<div class="slideshow">
    {#each images as {id, imgurl}}
        <img class="slideshowImage" class:showImage={id == imageShowIndex} src={imgurl} alt="oop">
    {/each}

    <button class="leftArrow" on:click={prevSlide} on:keydown={prevSlide} >&#10094</button>
    <button class="rightArrow" on:click={nextSlide} on:keydown={nextSlide}>&#10095</button>
    <div class="dotBar">
        <div class="dotdotBar">
            
            <div class="dotBox">•</div>
            <div class="dotBox">•</div>
            <div class="dotBox">•</div>
        </div>
    </div>


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
        display:none;
    }
    .showImage{
        display: block;
    }
    .eventsBar{
        width:100%;
        height:500px;
        position: relative;
    }
    .leftArrow{
        width:3%;
        height:14%;
        background: red;
        position: absolute;
        top:50%;
        display: flex;
        justify-content: center;
        align-items: center;  
        font-size: 30px;
    }
    .rightArrow{
        width:3%;
        height:14%;
        background: red;
        position: absolute;
        top:50%;
        right:0;
        display: flex;
        justify-content: center;
        align-items: center;  
        font-size: 30px;
    }
    .dotBar{
        width:100%;
        height:5%;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
    }
    .dotdotBar{
        width:5%;
        height:100%;
        display: flex;
        justify-content: space-around;
    }
    .dotBox{
        width:30%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;  
    }
</style>