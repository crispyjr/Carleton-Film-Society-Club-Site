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
        <Hamburger bind:open color="white" />
		<Menu bind:open />
    </div>
	
</div>

<style>
	/*MENU*/
	.menu {
		width: 75px;
		height: 75px;
		margin: 10px 15px;
		display: inline-block;
		cursor: pointer;
	}
	.bar1,
	.bar2,
	.bar3 {
		width: 50px;
		height: 5px;
		background-color: #333;
		margin: 10px 0;
		transition: 0.4s;
	}

    .bar1{
        margin: 20px 0 auto;
    }

	.bar1.change{
		transform: translate(0, 15px) rotate(-45deg); 
	}
	.bar2.change{
		opacity: 0;
	}
	.bar3.change{
		transform: translate(0, -15px) rotate(45deg);

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
	.navIconImg {
		width: 95%;
		height: 95%;
		margin: auto;
		padding-left: 10px;
		padding-top: 2px;
	}
	.navTextBar {
		width: 50%;
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
		font-size: 35px;
		font-family: 'Koulen';
		z-index: 2;
	}

	/**SCREEN WIDTH*/
	@media only screen and (min-width: 601px) and (max-width: 1050px) {
		.navTextBarBox {
			font-size: 20px;
			width: 80%;
		}
		.navIconR {
			display: none;
		}
	}
	@media only screen and (max-width: 600px) {
		.navTextBar,
		.navTextBarBox {
			display: none;
		}
		.navIconR {
			width: 100px;
		}
	}
</style>
