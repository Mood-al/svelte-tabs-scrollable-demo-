import { writable } from 'svelte/store';

export function useIncrement() {
	let isRTL = writable(false); // <- wrap count in a store
	$: {
		if (typeof window !== 'undefined') {
			const body = window.document.body;
			$isRTL ? (body.dir = 'rtl') : (body.dir = 'ltr');
		}
	}
	const onClick = () => {
		isRTL.update((c) => !c);
	};
	return { onClick, isRTL };
}
