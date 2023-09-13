<script>
    import {slide} from 'svelte/transition'
    import { onMount } from 'svelte';
    import Collapse from './collapse.svelte'
    import Modal from './Modal.svelte'
    import EventBox from '../EventBox.svelte';
    let showModal = false;
    import image7 from '$lib/assets/event_template.png';
    let title;
    let category;
    let location;
    let time;
    let data = [];
    
    function test(item){
        showModal = true;
        console.log(item);
    }

	onMount(fetchData);

	async function fetchData() {
		try {
			const response = await fetch('http://localhost:8080/get/events');
			data = await response.json();
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}



</script>
<div class="navCover"></div>

<Modal bind:showModal bind:title bind:category bind:location bind:time />
<div class="eventsTitleBar">
    <div class="eventsTitle">EVENTS</div>
</div>

<!-- just to keep the month organized -->
<Collapse month="september 2023">
    <div> 
        <div class="eventMonthBox">
            <div class="showEventsListBar">
                {#each data as item}
                <EventBox bind:showModal on:click={() => {test(item)}}/>
                <!-- <EventBox bind:showModal/>
                <EventBox bind:showModal/>
                <EventBox bind:showModal/>
                <EventBox bind:showModal/> -->
                {/each}
                
            </div>
        </div>
        
    </div>
</Collapse>
<Collapse month="October 2023">
    <div> 
        <div class="eventMonthBox" >
            <div class="showEventsListBar">
                <EventBox bind:title bind:category bind:location bind:time bind:showModal on/>
                <EventBox bind:showModal/>
                <EventBox bind:showModal/>
                <EventBox bind:showModal/>
                
            </div>
        </div>
        
    </div>
</Collapse>
<!-- <div> 
    <div class="eventMonthTitleBar">
        <p class="eventMonthTitle">SEPTEMBER 2023 </p>
        <div class="collapseButtonBox " on:click={toggleCollapse}><p class="collapseText">{collapseButton}</p></div>
    </div>
    {#if visible}
    <div class="eventMonthBox" transition:slide>
        <div class="showEventsListBar">
            <div class="eventBox">
                <div class="eventBoxTextBarTop">
                    <p>Kung Fu Panda</p>
                    <p>Screening</p>
                </div>
                <div class="eventBoxTextBarBottom">
                    <p>NICOL BUILDING ROOM 210</p>
                    <p> 4:00PM - 7:00PM</p>
                </div>
            </div>
            <div class="eventBox"></div>
            <div class="eventBox"></div>
            <div class="eventBox"></div>
            <div class="eventBox"></div>
            <div class="eventBox"></div>
            <div class="eventBox"></div>
            <div class="eventBox"></div>
        </div>
    </div>
    {/if}
</div> -->




<style>

    .navCover{
        width:100%;
        height:100px;
        background: rgb(165, 165, 165);
        opacity: 0.2;
        position: relative;
        box-shadow: 0px 2px 10px red;
    }
    .eventsTitleBar{
        width:100%;
        height:150px;
        position: relative;
    }
    .eventsTitle{
        width:300px;
        height:90%;
        position: absolute;
        font-size: 100px;
        font-family: 'Koulen';
        color:white;
        right:0;
        bottom: 0;
        display: flex;
        align-content: center;
        justify-content: space-around;
    }
    .eventMonthBox{
        width: 100%;
        height:550px;
        /* background: gray; */
        position: relative;
    }



    /*SAME CODE FROM MAIN PAGE*/
    .showEventsListBar{
    width:100%;
    height:525px;
    position: relative;
    /* background: orange; */
    /* justify-content: space-around;
    align-items: center;
    flex: 1; */
    overflow-x: auto;
    white-space: nowrap;
    }
    .showEventsListBar::-webkit-scrollbar{
    width:10px;
    }
    .showEventsListBar::-webkit-scrollbar-track{
        background: rgb(0, 0, 0);
    }
    .showEventsListBar::-webkit-scrollbar-thumb{
        background: rgb(121, 121, 121);
    }
    .showEventsListBar::-webkit-scrollbar-thumb:hover{
        background: rgb(63, 63, 63);
    }
    .eventBox{
    width:358px;
    height:468px;
    background: white;
    position:relative;
    display: inline-block;
    margin:20px 0px 10px 30px;
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
    position: absolute;
    text-align: center;
    font-family: 'Koulen';
    
    color:black;
}
.eventBoxTextBarTop{
    top:20%;
    font-size: 40px;
    height: 100px;
 
}
.eventBoxTextBarBottom{
    bottom: 0;
    font-size: 30px;
    line-height: 1;
    height:70px;

}
/**MODAL*/
/* The Modal (background) */
.modal {
    background-color: rgba(0, 0, 0, 0.582);
  position: fixed;
  width:100%; 
  height:100%;
  padding-top: 100px;
  z-index: 2;
  display: flex;
  justify-content: center;
}

.modalBox{
    background: #D9D9D9;
    position: relative;
    width:39%;
    height:70%;
    border-radius: 20px;
}
.close{
    position:absolute;
    right:20px;
    top:-10px;
    font-size: 50px;
    text-align: right;
    cursor: pointer;
}
.close:hover{
    color: red;
}

.category{
    height:120px;
    position: absolute;
    left:30px;
    top:10px;
    font-family: 'Koulen';
    font-size: 96px;
    border-bottom: 5px solid black;
}
.title{
    height:100px;
    position:absolute;
    top:125px;
    left:30px;
    font-family: 'Koulen';
    font-size: 40px;

}

.description{
    height:300px;
    width:95%;
    position:absolute;
    top:220px;
    left:30px;
    font-family: 'Koulen';
    font-size: 25px;

}
.location, .time{
    position:absolute;
    bottom:0;
    right:15px;
    font-family: 'Koulen';
    font-size: 30px;
    text-decoration: underline;
}
.time{
    left:20px;
    text-decoration: none;

}
</style>