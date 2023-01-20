<script>
	import { locale, locales } from '../i18n';
	import { isRTL } from '../isRTL';
	import Modal from './Modal.svelte';
	$: {
		if (typeof window !== 'undefined') {
			const body = document.body;

			$isRTL ? (body.dir = 'rtl') : (body.dir = 'ltr');
			$isRTL ? body.classList.add('rtl') : body.classList.remove('rtl');
		}
	}
	const langs = {
		ar: 'عربي',
		en: 'English',
		de: 'Deutsch'
	};
	let isDeSelected = false;
	$: {
		$locale === 'de' ? (isDeSelected = true) : (isDeSelected = false);
	}
</script>

{#if isDeSelected}
	<Modal on:close={() => (isDeSelected = false)}>
		<div class="text-dark fs-4">
			unfortunately, Deutsch is'nt available yet due to the process of learning it 😅.
			<p>As soon as I can be good in it, I will surely translate the Docs -_-</p>
		</div>
	</Modal>
{/if}

<select bind:value={$locale} class="form-select sts___btn">
	{#each locales as l}
		<option value={l}>{langs[l]}</option>
	{/each}
</select>
