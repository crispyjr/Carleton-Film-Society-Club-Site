<script>
export let showModal;
// export let category;
// export let title;
// export let description;
// export let location;
// export let time;
</script>
{#if showModal}
<div class="modal">
    <div class="modalBox">
        <div class="close" on:click={() => (showModal = false)}>x</div>
        <div class="category">SCREENING</div>
        <div class="title">EVERYTHING EVERYWHERE ALL AT ONCE</div>
        <div class="description">The first session involves going through an intro to film/filmmaking, a film-themed Kahoot, ice breaker activities, and a brainstorming session to start thinking of short film ideas you'd like to work on this semester</div>
        <a class="location" href="/">NICOL BUILDING ROOM 210</a>
        <div class="time">12:00PM - 12:00PM</div>
    </div>
</div>
{/if}


<style>
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