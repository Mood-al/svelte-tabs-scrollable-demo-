<script>
	import { fade } from 'svelte/transition';
	import { t } from '../i18n';

	export let selectedTabPosition;
</script>

<div>
	{#if selectedTabPosition}
		{#key selectedTabPosition}
			<div transition:fade>
				<span
					style="white-space: normal;"
					class="badge rounded-pill bg-danger animate__fadeInLeft animate__animated"
					>{$t(`selectedPostioningAnimatedBadgeText`)}</span
				>
			</div>
		{/key}
	{/if}
</div>
