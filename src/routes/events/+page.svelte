<script>
let collapseButton = '˅';

function toggleCollapse(x){
    
}
</script>


<div class="navCover"></div>
<div class="eventsTitleBar">
    <div class="eventsTitle">EVENTS</div>
</div>
<!-- just to keep the month organized -->
<div> 
    <div class="eventMonthTitleBar">
        <p class="eventMonthTitle">SEPTEMBER 2023 </p>
        <div class="collapseButtonBox"><p class="collapseText">{collapseButton}</p></div>
    </div>
    <div class="eventMonthBox">
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


    /*SAME CODE FROM MAIN PAGE*/
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