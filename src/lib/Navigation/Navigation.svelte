<script>
	// import logo from '$lib/assets/CFS_logo.png';
	import icon from '$lib/assets/raven3.png';
	import { Hamburger } from 'svelte-hamburgers';
	import Menu from './menu.svelte';


    let isActive = false;

    function toggleMenu() {
        isActive = !isActive;
        console.log(isActive)
    }
	let open;
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link href="https://fonts.googleapis.com/css?family=Koulen" rel="stylesheet" />
<div class="navBar">
	<div class="navIconL">
		<img class="navIconImg" src={icon} style="" />
	</div>
	<div class="navTextBar">
		<div class="navTextBarBox">events</div>
		<div class="navTextBarBox">about</div>
		<div class="navTextBarBox">gallery</div>
		<div class="navTextBarBox">Sign-up</div>
	</div>
	<div class="navIconR">
		<div class="ham">
			<Hamburger bind:open --color="black"/>
			
		</div>
        <!-- <Hamburger bind:open --color="white" /> -->
		<div class="blockM"></div>
		<Menu bind:open />
    </div>
	
</div>

<style>
	/*MENU*/
	.ham{
		position:absolute;
		width: 75px;
		height:80px;
		right: 0;
		bottom:0;
		display: none;
	}
	.blockM{
		position:relative;
		width:100px;
		height:100px;
		
	}
	



	.navBar {
		width: 100%;
		color: white;
		display: flex;

		justify-content: space-between;
		position: fixed;
		backdrop-filter: blur(10px);
		z-index: 1;
		/* filter: blur(8px);
        -webkit-filter: blur(8px); */
	}
	.navIconL,
	.navIconR {
		width: 261px;
		height: 100px;
		position: relative;
		
	}
	.navIconR{
		display:none;
	}
	.navIconImg {
		width: 95%;
		height: 95%;
		margin: auto;
		padding-left: 10px;
		padding-top: 2px;
	}
	.navTextBar {
		width: 35%;
		height: 100px;
		display: flex;
		justify-content: space-around;
	}
	.navTextBarBox {
		width: 20%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30px;
		font-family: 'Koulen';
		z-index: 2;
	}

	/**SCREEN WIDTH*/
	/* @media only screen and (min-width: 1500px) {
		.navTextBarBox {
			font-size: 35px;
			/* width: 80%; 
		}
		
	} */
	@media only screen and (max-width: 1250px) {
		.navTextBar,
		.navTextBarBox {
			display: none;
		}
		.navIconR {
			width: 100%;
			position: absolute;
			align-items: center;
			display: block;
		}
		.ham{
			display: block;
		}
	}
</style>
