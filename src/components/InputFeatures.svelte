<script>
	import { t } from '../i18n';

	export let tabsScrollAmount;
	export let animationDuration;
</script>

<div class="row">
	<div class="col-md-6">
		<label for="tabsScrollAmount" class="col-form-label"> {$t(`tabsScrollAmount`)} </label>
		<input
			type="number"
			id="tabsScrollAmount"
			class="form-control"
			aria-describedby="tabsScrollAmount"
			name="tabsScrollAmount"
			bind:value={tabsScrollAmount}
			min="0"
		/>
	</div>
	<div class="col-md-6">
		<label for="animationDuration" class="col-form-label"> {$t(`animationDuration`)} </label>
		<input
			type="number"
			id="animationDuration"
			class="form-control"
			aria-describedby="animationDuration"
			name="animationDuration"
			min="0"
			bind:value={animationDuration}
		/>
	</div>
</div>
