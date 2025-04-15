<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	let { children } = $props();
</script>

<Navbar />
{@render children()}
