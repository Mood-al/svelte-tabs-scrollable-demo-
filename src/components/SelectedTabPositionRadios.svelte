<script>
	import { t } from '../i18n';
	import Container from './Container.svelte';
	import AnimatedPostioningBadge from './AnimatedPostioningBadge.svelte';

	export let title;
	export let selectedTabPosition = {};

	const onRadioChange = (e) => {
		selectedTabPosition = { [e.target.value]: true };
	};
</script>

<Container {title} badge={$t(`new`)}>
	<div class="row">
		<div class="col-md-4">
			<div class="form-check">
				<input
					class="form-check-input"
					type="radio"
					name="selectedTabPositioning"
					value="scrollSelectedToStartOfView"
					id="scrollSelectedToStartOfView"
					on:change={onRadioChange}
					checked
				/>
				<label class="form-check-label" for="scrollSelectedToStartOfView">
					scrollSelectedToStartOfView (Default)</label
				>
			</div>
			<AnimatedPostioningBadge
				selectedTabPosition={selectedTabPosition['scrollSelectedToStartOfView']}
			/>
		</div>
		<div class="col-md-4">
			<div class="form-check">
				<input
					class="form-check-input"
					type="radio"
					name="selectedTabPositioning"
					value="scrollSelectedToCenterOfView"
					id="scrollSelectedToCenterOfView"
					on:change={onRadioChange}
				/>
				<label class="form-check-label" for="scrollSelectedToCenterOfView">
					scrollSelectedToCenterOfView</label
				>
			</div>
			<AnimatedPostioningBadge
				selectedTabPosition={selectedTabPosition['scrollSelectedToCenterOfView']}
			/>
		</div>
		<div class="col-md-4">
			<div class="form-check">
				<input
					class="form-check-input"
					type="radio"
					name="selectedTabPositioning"
					value="scrollSelectedToEndOfView"
					id="scrollSelectedToEndOfView"
					on:change={onRadioChange}
				/>
				<label class="form-check-label" for="scrollSelectedToEndOfView">
					scrollSelectedToEndOfView
				</label>
			</div>
			<AnimatedPostioningBadge
				selectedTabPosition={selectedTabPosition['scrollSelectedToEndOfView']}
			/>
		</div>
	</div>
</Container>
