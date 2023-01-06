<script>
	export let hideNavBtns;
	export let hideNavBtnsOnMobile;
	export let showTabsScroll;
</script>

<div class="row">
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
			<label class="form-check-label" for="hideNavBtns"> Hide navigantion buttons </label>
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
				Hide navigantion buttons on mobile screen
			</label>
		</div>
	</div>
	<div class="col-md-4">
		<div class="form-check form-switch mt-3">
			<input
				class="form-check-input"
				type="checkbox"
				role="switch"
				id="showTabsScroll"
				name="showTabsScroll"
				bind:checked={showTabsScroll}
			/>
			<label class="form-check-label" for="showTabsScroll"> show tabs scroll </label>
		</div>
	</div>
</div>
