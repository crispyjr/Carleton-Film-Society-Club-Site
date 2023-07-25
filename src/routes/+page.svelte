<script>
  import image1 from '$lib/assets/stock2.jpg';
   import { images } from './imageData.js';
  
    let imageShowIndex = 0;
    $: console.log(imageShowIndex)

    const prevSlide = () => {
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

    const slide1 = () => {
        imageShowIndex=0;
    }
    const slide2 = () => {
        imageShowIndex=1;
    }
    const slide3 = () => {
        imageShowIndex=2;
    }

    setInterval(() => {
    nextSlide()
  }, 10000)
</script>

<div class="slideshow">
    {#each images as {id, imgurl}}
        <img class="slideshowImage fade" class:showImage={id == imageShowIndex} src={imgurl} alt="oop">
    {/each}

    <span  class="leftArrow" on:click={prevSlide}>&#10094</span>
    <span  class="rightArrow" on:click={nextSlide}>&#10095</span>
    <div class="dotBar">
        <div class="dotdotBar">
            
            <div class="dotBox" on:click={slide1}>•</div>
            <div class="dotBox" on:click={slide2}>•</div>
            <div class="dotBox" on:click={slide3}>•</div>
        </div>
    </div>


</div>
<div class="eventsBar">
    <div></div>

</div>

<style>
    /* SLIDESHOW */
    .slideshow{
        width:100%;
        height:700px;
        background: black;
        position: relative;
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
    
    .rightArrow,
    .leftArrow{
        width:3%;
        height:14%;
        backdrop-filter: blur(10px);
        color:white;
        position: absolute;
        top:50%;
        display: flex;
        justify-content: center;
        align-items: center;  
        font-size: 30px;
        cursor: pointer;
    }
    .rightArrow{
        right:0;
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
        cursor: pointer;  
    }
    .fade{
    -webkit-animation-name: fade;
    -webkit-animation-duration: 2s;
    animation-name: fade;
    animation-duration: 2s;
}
@-webkit-keyframes fade{
    from {opacity: .3}
    to {opacity: 1}
}
@keyframes fade{
    from {opacity:.3}
    to{opacity:1}
}
/* UPCOMING EVENTS */
.eventsBar{
        width:100%;
        height:500px;
        position: relative;
    }
</style>