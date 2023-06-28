<script>
    
    import image1 from '$lib/assets/Jacob_Headshot2.jpg'
    import image2 from '$lib/assets/Jarukson_Headshot2.jpg'
    import image3 from '$lib/assets/Kim_Headshot3.jpg'
    import image4 from '$lib/assets/Mackenzie_Headshot2.jpg'
    
</script>

<div class="aboutSection">
    <div class="square" style="background: rgb(92, 91, 91); top: 70px;">

    </div>
    <div class="square" style=" left: 29%; background: rgb(36, 36, 36); top: 60px;">

    </div>
    <div class="square" style="left: 30%; background: black;">
        <p class="aboutText">ABOUT</p>
        <div class="aboutLine"></div>
        <div class="aboutDescSect"> Welcome to the Carleton Film Society! We’re a passionate community of movie enthusiasts celebrating the art of filmmaking. We’re dedicated to empowering the Carleton community by providing a platform for knowledge-sharing, learning opportunities, and accessible resources to help individuals express and share their unique stories. Collaborate on film projects, enhance your filmmaking skill through workshops and guest speaker presentations, and showcase your short films in our student-led festival.</div>
    </div>
</div>
<div class="teamSection">
    <div class="meetBar"> <p class="meetText">MEET THE TEAM</p></div>
    <div class="teamFlex">
        <div class="memberFlex">
            <img class="memberImage" src={image1} alt="lamp">
            <div class="memberRole"> Events Coordinator</div>
            <div class="memberName">Mackenzie Charbonneau </div>
            <div class="memberEmail"><p style="">mackenziecharbonneau@cmail.carleton.ca</p></div>
        </div>
        <div class="memberFlex">
            <img class="memberImage" src={image2} alt="lamp">
            <div class="memberRole"> Events Coordinator</div>
            <div class="memberName">Mackenzie Charbonneau </div>
            <div class="memberEmail"><p style="">mackenziecharbonneau@cmail.carleton.ca</p></div>
        </div>
        <div class="memberFlex">
            <img class="memberImage" src={image3} alt="lamp">
            <div class="memberRole"> Events Coordinator</div>
            <div class="memberName">Mackenzie Charbonneau </div>
            <div class="memberEmail"><p style="">mackenziecharbonneau@cmail.carleton.ca</p></div>
        </div>
        <div class="memberFlex">
            <img class="memberImage" src={image4} alt="lamp">
            <div class="memberRole"> Events Coordinator</div>
            <div class="memberName">Mackenzie Charbonneau </div>
            <div class="memberEmail"><p style="">mackenziecharbonneau@cmail.carleton.ca</p></div>
        </div>
        <div class="memberFlex">
            <img class="memberImage" src={image1} alt="lamp">
            <div class="memberRole"> Events Coordinator</div>
            <div class="memberName">Mackenzie Charbonneau </div>
            <div class="memberEmail"><p style="">mackenziecharbonneau@cmail.carleton.ca</p></div>
        </div>
        <div class="memberFlex">
            <img class="memberImage" src={image1} alt="lamp">
            <div class="memberRole"> Events Coordinator</div>
            <div class="memberName">Mackenzie Charbonneau </div>
            <div class="memberEmail"><p style="">mackenziecharbonneau@cmail.carleton.ca</p></div>
        </div>
        <div class="memberFlex"></div>

    </div>
</div>




 
<img>
<style>
    .teamFlex{
        
        width:100%;
        height:80%;
        position: relative;
        top:5%;
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .memberFlex{
        width:500px;
        height:500px;
        margin: 10px;
    }
    .memberImage{
        width:65%;
        height:60%;
        border-radius: 50%;
        position: relative;
        left:20%;
        top:5%;
    }
    .memberRole{
        width:65%;
        height:10%;
        position: relative;
        left:20%;
        top:30px;
        text-align: center;
        font-size: 30px;
        font-family: 'Times New Roman', Times, serif;
        color:white;
    }
    .memberName{
        width:65%;
        height:10%;
        position: relative;
        left:20%;
        top:30px;
        text-align: center;
        font-size: 30px;
        font-family: 'Times New Roman', Times, serif;
        color:white;
    }
    .memberEmail{
        width:80%;
        height:10%;
        
        position: relative;
        left:12%;
        top:30px;
        text-align: center;
        font-size: 20px;
        font-family: 'Times New Roman', Times, serif;
        text-decoration: underline;
        color:white;
    }
    .meetBar{
        width:42%;
        height:70px;
        background: black;
        position: relative;
        left:28%;
        color:white;
        text-align: center;
        
    }
    .meetText{
        position: relative;
        top:20%;
        font-size: 30px;
        font-family:'Times New Roman', Times, serif
    }
    .title{
        text-align: center;
        width: 100%;
        position: relative;
    }
    .aboutSection{
        width:100%;
        height:600px;
        position: relative;
        display: flex;
    }
    .teamSection{
        width:100%;
        height:1000px;
        
        position: relative;
    }
    .square{
        width: 40%;
        height: 400px;
        background: rgb(36, 36, 36);
        position: absolute;
        left:28%;
        top:50px;
        color:white;

    }
    .aboutText{
        position: relative;
        font-size: 30px;
        font-family:'Times New Roman', Times, serif;
        padding: 10px;
        padding-left: 20px;
        
        
        
    }
    .aboutLine{
        position: relative;
        width:93%;
        height:3px;
        left:3%;
        background: white;
        top:-12px;
        
    }
    .aboutDescSect{
        position: relative;
        width:93%;
        height:80%;
        background: black;
        left:3%;
        top:-7px;
        font-family: 'Times New Roman', Times, serif;
        overflow: hidden;
        font-size: 25px;
    }
</style>