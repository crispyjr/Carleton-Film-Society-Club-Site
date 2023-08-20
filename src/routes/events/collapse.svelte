<script>
     import {slide} from 'svelte/transition'
let collapseButton = '˅';
let visible=true;
const toggleCollapse = () => {
    visible = !visible;
    if(visible==true){
        collapseButton='˅'
    }
    else{
        collapseButton = '^';
    }
    console.log("moooooooo")
    

}
</script>

<div class="eventMonthTitleBar">
    <p class="eventMonthTitle">SEPTEMBER 2023 </p>
    <div class="collapseButtonBox" on:click={toggleCollapse}><p class="collapseText">{collapseButton}</p></div>
</div>
<div transition:slide>
    {#if visible}
    <slot></slot>
    {/if}
</div>

<style>
  .eventMonthTitleBar{
        width: 100%;
        height:100px;
        /* background: purple; */
        position: relative;
    }
    .eventMonthTitle{
        height:100%;
        /* background: pink; */
        position: absolute;
        font-family: 'Koulen';
        color: white;
        font-size: 70px;
        padding-left: 20px;
        position: relative;
        display: inline-block;
    }
    .collapseButtonBox{
        width: 50px;
        height:50px;
        /* background: pink; */
        position: relative;
        display: inline-block;
        font-size: 40px;
        color: white;
        align-items: end;
    }
    .collapseText{
        position: absolute;
        bottom: -18px;
        cursor: pointer;
    }

    /**hhhhhhhhhhhhhhhhhh*/
    .showEventsListBar{
    width:100%;
    height:525px;
    position: relative;
    background: orange;
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
    background: navy;
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
    
    color:white;
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
</style>