import { derived } from 'svelte/store';
import { locale } from './i18n';

export const isRTL = derived(locale, ($locale) => $locale === 'ar');
