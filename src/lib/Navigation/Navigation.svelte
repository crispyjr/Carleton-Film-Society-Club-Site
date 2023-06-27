<script>
    import logo from '$lib/assets/CFS_logo.png';
</script>


<body>

<div class="NavBar">
   
    <a href="/" ><img src={logo} alt="logo" width="160" height="160" style="padding: px;0 position: absolute; " ></a>
    <a href="https://forms.office.com/r/NkfFJxXmJ0" target="_blank" rel="noopener noreferrer"><div class="parallelogram">
        <p style="position: absolute; rotate: 270deg; right:-3px; top: 55px; font-size: 30px;">SIGN UP</p>
    </div></a>
    <div class="parallelogram" style="right: -230px; background: black;"></div>
    <a href="/gallery"><div class="parallelogram" style="right: 94px; background: #fe5959;">
        <p style="position: absolute; rotate: 270deg; right:-10px; top: 55px; font-size: 30px;">GALLERY</p>
    </div> </a>
    <a href="/about"><div class="parallelogram" style="right: 260px; background: #fe9797;">
        <p style="position: absolute; rotate: 270deg; right: 0px; top: 49px; font-size: 30px;">ABOUT</p>
    </div></a>
    <a href="/events"><div class="parallelogram" style="right: 419px; background: #ffb4b4;">
        <a href="/events" style="position: absolute; rotate: 270deg; right: -3px; top: 55px; font-size: 30px;">EVENTS</a>
    </div></a>
    

</div>






</body>

<style>
    body{
        margin: 0;
        background-color: #322F2E;
    }
    .NavBar{
        position: relative;
        overflow: hidden;
        background-color: white;
        width: 100%;
        height: 180px;
        box-shadow: 1px 1px 5px;
        
    }
    .BarElements{
        position: relative;
        font-size:30px;
        
        left: 30%;
        border-style: double;
        border-color:#322F2E ;
        
    }
.parallelogram {
  width: 250px;
  height: 160px;
  background: #e93333;
  transform: skew(20deg);
  rotate: 110deg;
  position: absolute;
  right: -65px;
  bottom: 0;
  top:10px;
}

.chunk{
    width: 100%;
    height: 600px;
    background-color: #fe5959;
}
.slideshow{
    width: 50%;
    height: 350px;
    left:50px;
    position: relative;
    background-color: #fe9797;
    z-index: -1;
    top:30px;
    border-radius: 10px;
    box-shadow: 1px 4px 4px;
}
.events{
    width:25%;
    height: 350px;
    background-color: #fe5959;
    position: absolute;
    right: 50px;
}
</style>