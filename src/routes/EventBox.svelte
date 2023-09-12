<script>
    import image7 from '$lib/assets/event_template.png';
    export let showModal;
    // export let title;
    // export let category;
    // export let location;
    // export let time;
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="eventBox" on:click={() => (showModal = true)}>
    <img src={image7} alt="" class="eventBoxImg" />
    <div class="eventBoxTextBarTop">Screening</div>
    <div class="eventBoxTextBarMiddle">
        kung fu panda
    </div>
    <div class="eventBoxTextBarBottom">
        <p>NICOL BUILDING ROOM 210</p>
        <p> 4:00PM - 7:00PM</p>
    </div>
</div>
<style>
.eventBox{
    width:358px;
    height:468px;
    background: white;
    position:relative;
    display: inline-block;
    margin:20px 0px 10px 30px;
    white-space: normal;
}
.eventBoxImg{
    width:100%;
    height:100%;
    position: absolute;
    filter: blur(8px);
  -webkit-filter: blur(8px)
}
.eventBoxTextBarTop, .eventBoxTextBarMiddle, .eventBoxTextBarBottom{
    width:100%;
    position: absolute;
    text-align: center;
    font-family: 'Koulen';
    
    color:white;
}
.eventBoxTextBarMiddle{
    top:40%;
    font-size: 40px;
    height: 200px;
    line-height: 1;
    
 
}
.eventBoxTextBarTop{
    font-size: 60px;
}
.eventBoxTextBarBottom{
    bottom: 0;
    font-size: 30px;
    line-height: 1;
    height:70px;

}
</style>