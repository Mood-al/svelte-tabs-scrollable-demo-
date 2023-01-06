<script>
	import { t } from '../i18n';
	import { isRTL } from '../isRTL';

	export let isLeftArrowDisapled;
	export let isRightArrowDisapled;
	export let goToEnd = () => null;
	export let goToStart = () => null;
</script>

<div class="row">
	<div class="col-md-6 d-flex">
		<button
			class="flex-fill btn rn___btn"
			disabled={$isRTL ? isRightArrowDisapled : isLeftArrowDisapled}
			on:click={() => goToStart()}
		>
			{$t(`go_to_start`)}
		</button>
	</div>
	<div class="col-md-6 d-flex">
		<button
			class="flex-fill btn rn___btn mt-md-0 mt-2"
			disabled={$isRTL ? isLeftArrowDisapled : isRightArrowDisapled}
			on:click={() => goToEnd()}
		>
			{$t(`go_to_end`)}
		</button>
	</div>
</div>
