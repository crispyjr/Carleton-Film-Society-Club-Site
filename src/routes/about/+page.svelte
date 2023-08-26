<script>
    
    import image1 from '$lib/assets/Jacob_Headshot2.jpg'
    import image2 from '$lib/assets/Jarukson_Headshot2.jpg'
    import image3 from '$lib/assets/Kim_Headshot3.jpg'
    import image4 from '$lib/assets/Mackenzie_Headshot2.jpg'
    import image5 from '$lib/assets/Beatrice_Headshot2.jpg'
    import image6 from '$lib/assets/Will_Headshot2.jpg'
    
    
</script>
<link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
<div class="navCover"></div>
<div class="aboutBar">
  <div class="aboutBox">
    <div class="aboutBox2">
        <div class="aboutTitle">ABOUT US</div>
        <div class="aboutDescription">We’re a passionate community of movie enthusiasts celebrating the art of filmmaking. We’re dedicated to empowering the Carleton community by providing a platform for knowledge-sharing, learning opportunities, and accessible resources to help individuals express and share their unique stories. Collaborate on film projects, enhance your filmmaking skill through workshops and guest speaker presentations, and showcase your short films in our student-led festival.</div>
    </div>
  </div>
</div>
<div class="teamMembersBar">
  <div class="teamMembersBox">
    <div class="starringBox">STARRING</div>
    <div class="namesBar">
      <div class="namesBox">
        <div class="leftSlip">Beatrice Villadegado</div>
        <div class="leftSlip">Will Osborne</div>
        <div class="leftSlip">Jacob Livingstone</div>
        <div class="leftSlip">Kimberly Huang</div>
        <div class="leftSlip">Kenzie Charbonneau</div>
        <div class="leftSlip">Jarukson Jeevakumar</div>
      </div>
      <div class="positionsBox">
        <div class="rightSlip">PRESIDENT</div>
        <div class="rightSlip">VICE PRESIDENT</div>
        <div class="rightSlip">FINANCIAL OFFICER</div>
        <div class="rightSlip">MARKETING OFFICER</div>
        <div class="rightSlip">MARKETING OFFICER</div>
        <div class="rightSlip">EVENTS COORDINATOR</div>
      </div>
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

      .aboutBar{
        width:100%;
        height:700px;
        background: rgb(24, 24, 24);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      .aboutBox{
        width:743px;
        height: 500px;
        background: #1E1D1D;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 25px;
      }
      .aboutBox2{
        width:100%;
        height:100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 25px;
      }
      .aboutBox2:hover{
        color:aquamarine
      }
      .aboutTitle{
        /* width:100%;
        height:100px; */
        position: absolute;
        top:50px;
        color:white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-family: 'Inter';
        font-size: 70px;
      }
      .aboutTitle:hover{
        color:black;
      }
      .aboutDescription{
        width:75%;
        height:300px;
        position: absolute;
        bottom:40px;
        color:white;
        font-size: 20px;
        text-align: center;
        font-family: 'Inter';
      }
      .teamMembersBar{
        width:100%;
        height:400px;
        background:black;
        position:relative;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
      }
      .teamMembersBox{
        width:743px;
        height:100%;
        /* background: burlywood; */
        position: absolute;
    
      }
      .starringBox{
        width:100%;
        height:80px;
        /* background:green; */
        text-align: center;
        font-size: 48px;
        color:white;
        font-family: 'Inter';
      }
      .namesBar{
        width:100%;
        height:70%;
        /* background: blue; */
        position: relative;
      }
      .namesBox{
        width:47%;
        height:100%;
        /* background: pink; */
        position: absolute;
        top:10px;
      }
      .positionsBox{
        width:47%;
        height:100%;
        /* background: magenta; */
        position: absolute;
        right:0;
        top:10px;
      }
      .leftSlip,.rightSlip{
        width:100%;
        height:35px;
        background: black;
        position: relative;
        color:white;
        text-align: right;
        font-size: 25px;
      }
      .rightSlip{
        text-align: left;
        font-weight: bold;
      }
  
  </style>