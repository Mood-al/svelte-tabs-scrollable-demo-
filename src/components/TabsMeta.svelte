<script>
	import { t } from '../i18n';
	import { isRTL } from '../isRTL';

	export let isRightArrowDisapled;
	export let isLeftArrowDisapled;
	export let activeTab;
</script>

<div class="row my-3">
	<ul class="list-group list-group-flush col-md-6">
		<li class="list-group-item">
			<span dir="ltr">{$t('reachedToStart')}</span>
			{' '}
			<span class="badge bg-primary">
				{' '}
				{$isRTL ? isRightArrowDisapled : isLeftArrowDisapled ? 'true' : 'false'}
			</span>
		</li>
		<li class="list-group-item">
			<span dir="ltr">{$t('selectedTabIndex')}</span>{' '}
			<span class="badge bg-primary"> {activeTab}</span>
		</li>
		<li class="list-group-item" />
	</ul>
	<ul class="list-group list-group-flush col-md-6">
		<li class="list-group-item">
			<span dir="ltr">{$t(`reachedToEnd`)}</span>
			{' '}
			<span class="badge bg-primary">
				{' '}
				{$isRTL ? isLeftArrowDisapled : isRightArrowDisapled ? 'true' : 'false'}
			</span>
		</li>

		<li class="list-group-item" />
	</ul>
</div>
