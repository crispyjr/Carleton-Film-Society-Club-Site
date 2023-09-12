<script>
    import image7 from '$lib/assets/event_template.png';
    export let showModal;
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="eventBox" on:click={() => (showModal = true)}>
    <img src={image7} alt="" class="eventBoxImg" />

    <div class="eventBoxTextBarTop">
        bruhh
        everything everything
        
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
.eventBoxTextBarTop, .eventBoxTextBarBottom{
    width:100%;
    position: relative;
    text-align: center;
    font-family: 'Koulen';
    
    color:white;
}
.eventBoxTextBarTop{
    top:0%;
    font-size: 40px;
    height: 400px;
    background: red;
}
.eventBoxTextBarBottom{
    bottom: 0;
    font-size: 30px;
    line-height: 1;
    height:70px;
    background: blue;

}
</style>