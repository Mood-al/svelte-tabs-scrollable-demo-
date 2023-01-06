<script>
	import { t } from '../i18n';
	import Container from './Container.svelte';
	import AnimatedPostioningBadge from './AnimatedPostioningBadge.svelte';

	export let title;
	export let selectedTabPosition = {};
	let clicked = false;
	let time = 4000;

	const onRadioChange = (e) => {
		clicked = true;
		selectedTabPosition = { [e.target.value]: true };
		if (clicked) {
			setTimeout(() => {
				clicked = false;
			}, time);
		}
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
				{clicked}
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
				{clicked}
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
				{clicked}
				selectedTabPosition={selectedTabPosition['scrollSelectedToEndOfView']}
			/>
		</div>
	</div>
</Container>
