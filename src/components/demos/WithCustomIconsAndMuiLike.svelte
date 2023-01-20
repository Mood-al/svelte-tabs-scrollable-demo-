<script>
	import Tab from 'svelte-tabs-scrollable/Tab.svelte';
	import Tabs from 'svelte-tabs-scrollable/Tabs.svelte';
	import '../../styles/mui.css';
	import { t } from '../../i18n';
	import { isRTL } from '../../isRTL';
	import ChevronRight from '../icons/ChevronRight.svelte';
	import ChevronLeft from '../icons/ChevronLeft.svelte';
	let activeTab = 10;
	const onClick = (e, index) => {
		activeTab = index;
	};
</script>

<Tabs
	tabsContainerClassName="mui-like"
	onTabClick={onClick}
	isRTL={$isRTL}
	{activeTab}
	rightBtnIcon={ChevronRight}
	leftBtnIcon={ChevronLeft}
>
	{#each [...Array(33).keys()] as item}
		<Tab>
			{$t('tab')}
			{item}
		</Tab>
	{/each}
</Tabs>
