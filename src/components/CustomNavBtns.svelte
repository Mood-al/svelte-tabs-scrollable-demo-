<script>
	import { t } from '../i18n';
	import Container from './Container.svelte';

	export let isLeftArrowDisapled;
	export let isRightArrowDisapled;
	export let onLeftBtnClick = () => null;
	export let onRightBtnClick = () => null;

	export let title;
</script>

<Container {title}
	><div class="row">
		<div class="col-md-6 d-flex">
			<button
				class="flex-fill btn rn___btn"
				disabled={isLeftArrowDisapled}
				on:click={onLeftBtnClick}
			>
				{$t('click_me_left')}
			</button>
		</div>
		<div class="col-md-6 d-flex">
			<button
				class="flex-fill btn rn___btn mt-md-0 mt-2"
				disabled={isRightArrowDisapled}
				on:click={() => onRightBtnClick()}
			>
				{$t('click_me_right')}
			</button>
		</div>
	</div>
</Container>
