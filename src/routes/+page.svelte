<script>
	import Tabs from 'svelte-tabs-scrollable/Tabs.svelte';
	import Tab from 'svelte-tabs-scrollable/Tab.svelte';
	import { t } from '../i18n';
	import { isRTL } from '../isRTL';
	import CustomNavBtns from '../components/CustomNavBtns.svelte';
	import ControlTabs from '../components/ControlTabs.svelte';
	import DirectionSwitcher from '../components/DirectionSwitcher.svelte';
	import SwitchInputFeatures from '../components/SwitchInputFeatures.svelte';
	import TabsMeta from '../components/TabsMeta.svelte';
	import InputFeatures from '../components/InputFeatures.svelte';
	import SelectedTabPositionRadios from '../components/SelectedTabPositionRadios.svelte';

	let activeTab = 24;
	const onTabClick = (e, index) => {
		// console.log(index);
		activeTab = index;
	};

	let goToEnd;
	let goToStart;
	let onLeftBtnClick;
	let onRightBtnClick;
	let showTabsScroll = false;
	let hideNavBtns = false;
	let hideNavBtnsOnMobile = !hideNavBtns;
	let isLeftArrowDisapled;
	let isRightArrowDisapled;
	let animationDuration = 300;
	let tabsScrollAmount = 3;
	let selectedTabPosition = {};
	const didReachEnd = (val) => {
		isRightArrowDisapled = val;
		// sets if the tabs reached the end point of the tab's container
	};
	const didReachStart = (val) => {
		isLeftArrowDisapled = val;
		// sets if the tabs reached the start point of the tab's container
	};
</script>

<!-- I couldn't add comments between the <Tabs/>'s props -_- -->
<div class="p-2 shadow-sm sticky-top bg-white">
	<Tabs
		{activeTab}
		{onTabClick}
		bind:goToEnd
		bind:goToStart
		bind:onLeftBtnClick
		bind:onRightBtnClick
		isRTL={$isRTL}
		{didReachStart}
		{didReachEnd}
		{animationDuration}
		{tabsScrollAmount}
		{hideNavBtnsOnMobile}
		{showTabsScroll}
		{hideNavBtns}
		tabsClassName="ss"
		tabsContainerClassName="container"
		{...selectedTabPosition}
	>
		{#each [...Array(33).keys()] as item}
			<Tab>
				{$t('tab')}
				{item}
			</Tab>
		{/each}
	</Tabs>
</div>
<div class="container">
	<CustomNavBtns
		title={$t('control_tabs')}
		{onLeftBtnClick}
		{onRightBtnClick}
		{isLeftArrowDisapled}
		{isRightArrowDisapled}
	/>
	<DirectionSwitcher />
	<ControlTabs {goToEnd} {goToStart} {isLeftArrowDisapled} {isRightArrowDisapled} />
	<SwitchInputFeatures bind:showTabsScroll bind:hideNavBtns bind:hideNavBtnsOnMobile />
	<TabsMeta {isLeftArrowDisapled} {isRightArrowDisapled} {activeTab} />
	<InputFeatures bind:animationDuration bind:tabsScrollAmount />
	<SelectedTabPositionRadios title={`Selected tab positioning`} bind:selectedTabPosition />
</div>
