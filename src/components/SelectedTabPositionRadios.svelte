<script>
	import Container from './Container.svelte';

	export let title;
	export let selectedTabPosition = {};
	const onRadioChange = (e) => {
		selectedTabPosition = { [e.target.value]: true };
	};
</script>

<Container {title} badge={'New'}>
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
		</div>
	</div>
</Container>
