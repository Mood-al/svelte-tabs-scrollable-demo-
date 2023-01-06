<script>
	import { t } from '../i18n';

	export let hideNavBtns;
	export let hideNavBtnsOnMobile;
	export let showTabsScroll;
</script>

<div class="row justify-content-center mt-2">
	<div class="col-md-3">
		<div class="form-check form-switch mt-3">
			<input
				class="form-check-input"
				type="checkbox"
				role="switch"
				id="hideNavBtns"
				name="hideNavBtns"
				bind:checked={hideNavBtns}
			/>
			<label class="form-check-label" for="hideNavBtns"> {$t(`hideNavBtns`)} </label>
		</div>
	</div>
	<div class="col-md-4">
		<div class="form-check form-switch mt-3">
			<input
				class="form-check-input"
				type="checkbox"
				role="switch"
				id="hideNavBtnsOnMobile"
				name="hideNavBtnsOnMobile"
				bind:checked={hideNavBtnsOnMobile}
			/>
			<label class="form-check-label" for="hideNavBtnsOnMobile">
				{$t(`hideNavBtnsOnMobile`)}
			</label>
		</div>
	</div>
	<div class="col-md-3">
		<div class="form-check form-switch mt-3">
			<input
				class="form-check-input"
				type="checkbox"
				role="switch"
				id="showTabsScroll"
				name="showTabsScroll"
				bind:checked={showTabsScroll}
			/>
			<label class="form-check-label" for="showTabsScroll"> {$t(`showTabsScroll`)} </label>
		</div>
	</div>
</div>
