<!-- <div class="w-full h-12 bg-zinc-900 flex items-center justify-center">
    <p class="text-center text-white">Made with ❤️ by Shiquana and Adrian.</p>
</div>   -->
<script>
	import { icons } from '$lib/imageData.js';
</script>


<div class="footer">
    <div class="iconsBar">
        {#each icons as {id,imgurl, link, alt}}
        	<a href={link} class="iconDots"><img class="iconImage" src={imgurl} alt={alt}></a>
        {/each}
    </div>
    <div class="copyRightBar">© 2023 Carleton Film Society</div>
</div>

<style>
	/* FOOTER  */
.footer{
    width:100%;
    height:100px;
    background: black;
    position: relative;
    
}
.iconsBar{
    width:250px;
    height:70px;
    display:flex;
    position: absolute;
    right:0;
    bottom:0;
    justify-content: space-around;
    align-items: center;
}
.iconDots{
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.iconImage{
    height:50%;
    width:50%;
}
.copyRightBar{
    width:400px;
    height:50px;
    color:white;
    position: absolute;
    bottom: 0;
    font-family: 'Koulen';
    font-size: 30px;
    padding-left: 10px;
}
</style>
