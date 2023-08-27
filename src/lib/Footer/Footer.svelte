<!-- <div class="w-full h-12 bg-zinc-900 flex items-center justify-center">
    <p class="text-center text-white">Made with ❤️ by Shiquana and Adrian.</p>
</div>   -->
<script>
	import { icons } from '$lib/imageData.js';
</script>

<div class="w-full h-28 bg-black relative">
	<div class="flex w-64 h-20 absolute r-0 b-0 justify-around items-center">
		{#each icons as { id, imgurl, link, alt }}
			<div class="h-12 w-12 bg-white rounded-full flex justify-around items-center">
				<a href={link}>
					<img target="_blank" class="w-1/2 h-1/2 self-center" src={imgurl} {alt} />
				</a>
			</div>
		{/each}
	</div>
	<div class="copyRightBar">© 2023 Carleton Film Society</div>
</div>

<style>
	.copyRightBar {
		width: 400px;
		height: 50px;
		color: white;
		position: absolute;
		bottom: 0;
		font-family: 'Koulen';
		font-size: 30px;
		padding-left: 10px;
	}
</style>
