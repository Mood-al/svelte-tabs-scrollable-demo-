<!-- source : https://svelte.dev/examples/modal -->
<script>
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handle_keydown = (e) => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown} />

<div class="modal-background" on:click={close} />

<div class="modal rounded" role="dialog" aria-modal="true" bind:this={modal}>
	<slot />
	<hr />
	<!-- svelte-ignore a11y-autofocus -->
	<button autofocus class="btn d-block w-100" on:click={close}>close modal</button>
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		z-index: 9991;
	}

	.modal {
		position: fixed;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		height: 300px;
		overflow: auto;
		transform: translate(-50%, -50%);
		padding: 1rem;
		border-radius: 0.2em;
		background: white;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		z-index: 9992;
	}
	@media (max-width: 575.98px) {
		.modal {
			height: 400px;
		}
	}

	button {
		display: block;
	}
</style>
