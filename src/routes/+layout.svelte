<script>
	import '../app.css';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import Footer from '$lib/Footer/Footer.svelte';
</script>

<Navigation />
<div class="pt-20">
	<slot />
</div>

<Footer />
