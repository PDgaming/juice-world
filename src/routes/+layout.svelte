<script>
	import '../app.css';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="app min-h-screen bg-[#1e1e1e] dark">
	<main>
		{@render children?.()}
	</main>
</div>
