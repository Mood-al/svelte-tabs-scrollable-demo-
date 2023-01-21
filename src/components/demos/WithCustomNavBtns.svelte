<script>
	import Tab from 'svelte-tabs-scrollable/Tab.svelte';
	import Tabs from 'svelte-tabs-scrollable/Tabs.svelte';
	import { t } from '../../i18n';
	import { isRTL } from '../../isRTL';

	export let isLeftArrowDisapled;
	export let isRightArrowDisapled;
	let onLeftBtnClick;
	let onRightBtnClick;
	let activeTab = 10;
</script>

<Tabs
	didReachEnd={(val) => (isRightArrowDisapled = val)}
	didReachStart={(val) => (isLeftArrowDisapled = val)}
	bind:onLeftBtnClick
	bind:onRightBtnClick
	hideNavBtns={true}
	isRTL={$isRTL}
	{activeTab}
>
	{#each [...Array(33).keys()] as item}
		<Tab>
			{$t('tab')}
			{item}
		</Tab>
	{/each}
</Tabs>
<div class="row">
	<div class="col-md-6 d-flex">
		<button class="flex-fill btn rn___btn" disabled={isLeftArrowDisapled} on:click={onLeftBtnClick}>
			{$t('click_me_left')}
		</button>
	</div>
	<div class="col-md-6 d-flex">
		<button
			class="flex-fill btn rn___btn mt-md-0 mt-2"
			disabled={isRightArrowDisapled}
			on:click={onRightBtnClick}
		>
			{$t('click_me_right')}
		</button>
	</div>
</div>
