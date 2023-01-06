<script>
	export let tabsScrollAmount;
	export let animationDuration;
</script>

<div class="row">
	<div class="col-md-6">
		<label for="tabsScrollAmount" class="col-form-label"> Tabs scroll amount </label>
		<input
			type="number"
			id="tabsScrollAmount"
			class="form-control"
			aria-describedby="tabsScrollAmount"
			name="tabsScrollAmount"
			bind:value={tabsScrollAmount}
		/>
	</div>
	<div class="col-md-6">
		<label for="animationDuration" class="col-form-label"> Animation duration </label>
		<input
			type="number"
			id="animationDuration"
			class="form-control"
			aria-describedby="animationDuration"
			name="animationDuration"
			bind:value={animationDuration}
		/>
	</div>
</div>
