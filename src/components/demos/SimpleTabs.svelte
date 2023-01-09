<script>
	import Tab from 'svelte-tabs-scrollable/Tab.svelte';
	import Tabs from 'svelte-tabs-scrollable/Tabs.svelte';
	import { t } from '../../i18n';
	import { isRTL } from '../../isRTL';
	let activeTab = 10;
</script>

<Tabs isRTL={$isRTL} {activeTab}>
	{#each [...Array(33).keys()] as item}
		<Tab>
			{$t('tab')}
			{item}
		</Tab>
	{/each}
</Tabs>
