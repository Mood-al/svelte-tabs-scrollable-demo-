<script>
	import { page } from '$app/stores';
	import LocaleDropdown from './LocaleDropdown.svelte';
	import NpmIcon from './NpmIcon.svelte';
	let isHome = true;
	$: isHome = $page.route.id === '/';
</script>

<nav class="nav bg-primary">
	<div class="container">
		<div class="nav text-white py-2 d-flex align-items-center justify-content-between">
			{#if isHome}
				<a
					class="display-5"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.npmjs.com/package/svelte-tabs-scrollable">svelte-tabs-scrollable</a
				>
			{:else}
				<a href="/" class="display-5">svelte-tabs-scrollable</a>
			{/if}
			<div class="d-flex align-items-center">
				<LocaleDropdown />
				<a href="/demos" class="mx-4">Demos</a>
				<a
					href="https://www.npmjs.com/package/svelte-tabs-scrollable"
					target="_blank"
					rel="noopener noreferrer"><NpmIcon /></a
				>
			</div>
		</div>
	</div>
</nav>
