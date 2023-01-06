<script>
	import { fade } from 'svelte/transition';
	import { t } from '../i18n';

	export let clicked;
	export let selectedTabPosition;
</script>

{#if clicked && selectedTabPosition}
	{#key selectedTabPosition}
		<div transition:fade>
			<span class="badge rounded-pill bg-danger animate__fadeInLeft animate__animated"
				>{$t(`selectedPostioningAnimatedBadgeText`)}</span
			>
		</div>
	{/key}
{/if}
