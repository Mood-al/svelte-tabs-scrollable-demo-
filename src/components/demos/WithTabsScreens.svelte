<script>
	import Tab from 'svelte-tabs-scrollable/Tab.svelte';
	import Tabs from 'svelte-tabs-scrollable/Tabs.svelte';

	import { t } from '../../i18n';
	import { isRTL } from '../../isRTL';
	let activeTab = 10;
	const onClick = (e, index) => {
		activeTab = index;
	};
</script>

<Tabs onTabClick={onClick} isRTL={$isRTL} {activeTab}>
	{#each [...Array(33).keys()] as item}
		<Tab>
			{$t('tab')}
			{item}
		</Tab>
	{/each}
</Tabs>
{#each [...Array(33).keys()] as item (item)}
	{#if activeTab === item}
		<!-- Check animate.css to change the animation type 'animate__animated animate__fadeInLeft' -->
		<div class="animate__animated animate__fadeInLeft mx-5" role="tabpanel">
			{$t('tabScreen')}
			{activeTab}
		</div>
	{/if}
{/each}
