<script>
	import { locale, locales } from '../i18n';
	import { isRTL } from '../isRTL';
	$: {
		if (typeof window !== 'undefined') {
			const body = document.body;

			$isRTL ? (body.dir = 'rtl') : (body.dir = 'ltr');
		}
	}
	const langs = {
		en: 'English',
		ar: 'عربي'
	};
</script>

<select bind:value={$locale} class="form-select sts___btn">
	{#each locales as l}
		<option value={l}>{langs[l]}</option>
	{/each}
</select>
