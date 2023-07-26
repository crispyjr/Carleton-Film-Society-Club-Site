<script>
  import image1 from '$lib/assets/stock2.jpg';
   import { images } from './imageData.js';
   import { icons } from './imageData.js';
   import image7 from '$lib/assets/youtube.png';
  
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

<link href='https://fonts.googleapis.com/css?family=Koulen' rel='stylesheet'>
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
<div class="events">
    <div class="upcomingEventsBar text">UPCOMING EVENTS</div>
    <div class="showEventsListBar">
        <span class="eventBox"></span>
        <span class="eventBox"></span>
        <span class="eventBox"></span>
        <span class="eventBox"></span>
    </div>
    <div class="seeMoreBar">SEE MORE</div>

</div>

<div class="footer">
    <div class="iconsBar">
        {#each icons as {id,imgurl}}
        <div class="iconDots">
            <img class="iconImage" src={imgurl}>
        </div>
        {/each}
    </div>
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
.events{
        width:100%;
        height:700px;
        position: relative;
        background: black;
    }

.upcomingEventsBar{
    width:100%;
    height:20%;
    background: black;
    position: relative;
    color:white;
    font-size: 80px;
    display: flex;
    align-items: center;  
    font-family: 'Koulen';
}
.text{
    padding-left: 20px;
}
.showEventsListBar{
    width:100%;
    height:500px;
    display: flex;
    position: relative;
    justify-content: space-around;
    align-items: center;
}
.eventBox{
    width:22%;
    height:90%;
    background: white;

}
.seeMoreBar{
    width:7%;
    height:10%;
    background: black;
    position: absolute;
    right:0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    font-size: 30px;
    font-family: 'Koulen';
    text-decoration: underline;
    color:white;
}

/* FOOTER  */
.footer{
    width:100%;
    height:200px;
    background: black;
    position: relative;
}
.iconsBar{
    width:20%;
    height:100px;
    display:flex;
    position: absolute;
    right:0;
    bottom:0;
    justify-content: space-around;
    align-items: center;
}
.iconDots{
    height: 75px;
  width: 75px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.iconImage{
    height:50px;
    width:50px;
}



</style>