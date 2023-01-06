<script>
	import { locale, t } from '../i18n';
	import { isRTL } from '../isRTL';
</script>

<div class="d-flex my-3">
	<button
		dir="auto"
		on:click={() => {
			if ($locale === 'en') {
				locale.set('ar');
			} else {
				locale.set('en');
			}
		}}
		class="btn rn___btn flex-fill"
	>
		{$t('switch_to_mode', { mode: $isRTL ? 'LTR' : 'RTL' })}
	</button>
</div>
