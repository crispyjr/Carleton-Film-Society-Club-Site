<script>
    
    import image1 from '$lib/assets/Jacob_Headshot2.jpg'
    import image2 from '$lib/assets/Jarukson_Headshot2.jpg'
    import image3 from '$lib/assets/Kim_Headshot3.jpg'
    import image4 from '$lib/assets/Mackenzie_Headshot2.jpg'
    import image5 from '$lib/assets/Beatrice_Headshot2.jpg'
    import image6 from '$lib/assets/Will_Headshot2.jpg'
    let active=false;
    let member1 = false;
    let member2 = false;
    let member3 = false;
    let member4 = false;
    let member5 = false;
    let member6 = false;
    const act = () => {
      active=true;
    }
    const mem1 = () => {member1=true;active=false;member2=false;member3=false;member4=false;member5=false;member6=false;console.log(member1)}  
    const mem2 = () => {member2=true;member1=false;member3=false;member4=false;member5=false;member6=false;}
    const mem3 = () => {member3=true;member1=false;member2=false;member4=false;member5=false;member6=false;}
    const mem4 = () => {member4=true;member1=false;member2=false;member3=false;member5=false;member6=false;}
    const mem5 = () => {member5=true;member1=false; member2=false;member3=false;member4=false;member6=false;}
    const mem6 = () => {member6=true;member1=false;member2=false;member3=false;member5=false;member5=false;}
    
    
</script>
<link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
<div class="navCover"></div>
<div class="aboutBar">
  <div class="aboutBox">
    <div class="aboutBox2">
        <div class="aboutTitle" >ABOUT US</div>
        <div class="aboutDescription">We’re a passionate community of movie enthusiasts celebrating the art of filmmaking. We’re dedicated to empowering the Carleton community by providing a platform for knowledge-sharing, learning opportunities, and accessible resources to help individuals express and share their unique stories. Collaborate on film projects, enhance your filmmaking skill through workshops and guest speaker presentations, and showcase your short films in our student-led festival.</div>
    </div>
  </div>
</div>
<div class="teamMembersBar">
  <div class="teamMembersBox">
    <div class="starringBox">STARRING</div>
    <div class="namesBar">
      <div class="namesBox">
        <div class="leftSlip"  class:hoverText={member1} on:mouseenter={mem1}>Beatrice Villadegado</div>
        <div class="leftSlip" class:hoverText={member2} on:mouseenter={mem2}>Will Osborne</div>
        <div class="leftSlip" class:hoverText={member3} on:mouseenter={mem3}>Jacob Livingstone</div>
        <div class="leftSlip" class:hoverText={member4} on:mouseenter={mem4}>Kimberly Huang</div>
        <div class="leftSlip" class:hoverText={member5} on:mouseenter={mem5}>Kenzie Charbonneau</div>
        <div class="leftSlip" class:hoverText={member6} on:mouseenter={mem6}>Jarukson Jeevakumar</div>
      </div>
      <div class="positionsBox">
        <div class="rightSlip" class:hoverText={member1} on:mouseenter={mem1}>PRESIDENT</div>
        <div class="rightSlip" class:hoverText={member2} on:mouseenter={mem2}>VICE PRESIDENT</div>
        <div class="rightSlip" class:hoverText={member3} on:mouseenter={mem3}>FINANCIAL OFFICER</div>
        <div class="rightSlip" class:hoverText={member4} on:mouseenter={mem4}>MARKETING OFFICER</div>
        <div class="rightSlip" class:hoverText={member5} on:mouseenter={mem5}>MARKETING OFFICER</div>
        <div class="rightSlip" class:hoverText={member6} on:mouseenter={mem6}>EVENTS COORDINATOR</div>
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
        /* background: rgb(24, 24, 24); */
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
        width:700px;
        height:100%;
        /* background: burlywood; */
        position: absolute;
        top:-30px;
    
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
        height:35px;
        position: relative;
        color:white;
        text-align: right;
        font-size: 25px;
      }
      .rightSlip{
        text-align: left;
        font-weight: bold;

      }
      .hoverText{
        color: yellow;
      }
      
  
  </style>