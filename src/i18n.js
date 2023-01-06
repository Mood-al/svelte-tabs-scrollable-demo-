//I got the code from here https://svelte.dev/repl/de39de663ef2445b8fe17b79c500013b?version=3.55.0

import { derived, writable } from 'svelte/store';
import translations from '$lib/assets/translations.js';

export const locale = writable('en');
export const locales = Object.keys(translations);

function translate(locale, key, vars) {
	// Let's throw some errors if we're trying to use keys/locales that don't exist.
	// We could improve this by using Typescript and/or fallback values.
	if (!key) {
		console.log('no key provided to $t()');
		return;
	}
	if (!locale) {
		console.log(`no translation for key "${key}"`);
		return;
	}

	// Grab the translation from the translations object.
	let text = translations[locale][key];

	if (!text) {
		console.log(`no translation found for ${locale}.${key}`);
		return;
	}

	// // Replace any passed in variables in the translation string.
	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const t = derived(locale, ($locale) => (key, vars = {}) => {
	return translate($locale, key, vars);
});
