<script>
	import { t } from '../i18n';
	import Title from './Title.svelte';
	import { page } from '$app/stores';
	import CodeSandBoxIcon from './icons/CodeSandBoxIcon.svelte';
	import CopyIcon from './icons/CopyIcon.svelte';
	import SvelteReplIcon from './icons/SvelteReplIcon.svelte';

	export let title;
	export let replURL;
	export let codesandboxURL;
	export let exampleComponent;
	export let content;
	let showCodeSandBox = false;
	let cachedShowCodeSandBox = false;
	let copyLinkClicked = false;
	const onCopyBtnClick = () => {
		copyLinkClicked = true;
	};
	const onCodeSandBoxBtnClick = () => {
		showCodeSandBox = true;
		cachedShowCodeSandBox = !cachedShowCodeSandBox;
	};

	let isHashSelected;
	$: {
		isHashSelected = title === $page.url.hash.split('#')[1];
		if (title === $page.url.hash.split('#')[1]) {
			showCodeSandBox = true;
			cachedShowCodeSandBox = true;
		}
	}
</script>

<div class="parent">
	<Title {title} {content} {isHashSelected} />
	<div class="p-2 shadow-sm bg-white rounded-2" id={title}>
		<svelte:component this={exampleComponent} />
	</div>
	<div
		class="btn-toolbar my-3 d-flex justify-content-center"
		role="toolbar"
		aria-label="Toolbar with button groups"
	>
		<div class="btn-group me-2" role="group" aria-label="First group">
			<a
				dir="auto"
				href={replURL}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-outline-secondary"
			>
				<span class="d-sm-flex d-none">
					{$t(`openRepl`)}
				</span>
				<span class="d-flex d-sm-none">
					<SvelteReplIcon />
				</span></a
			>
			<button dir="auto" on:click={onCopyBtnClick} type="button" class="btn btn-outline-secondary">
				<span class="d-sm-flex d-none">
					{$t(`copyCodesandboxLink`)}
				</span>
				<span class="d-flex d-sm-none">
					<CopyIcon />
				</span>
			</button>

			<button
				dir="auto"
				type="button"
				on:click={onCodeSandBoxBtnClick}
				class={`btn btn-outline-secondary ${
					showCodeSandBox && cachedShowCodeSandBox ? 'active' : ''
				}`}
			>
				<span class="d-sm-flex d-none">
					{$t(`showCodesandbox`)}
				</span>
				<span class="d-flex d-sm-none">
					<CodeSandBoxIcon />
				</span>
			</button>
		</div>
	</div>

	{#if showCodeSandBox}
		<div class={`${cachedShowCodeSandBox ? 'd-block' : 'd-none'}`}>
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe
				src={codesandboxURL}
				style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
				allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
				sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
			/>
		</div>
	{/if}
</div>

<style>
	.parent :global(svg) {
		width: 1.5rem;
		height: 1.5rem;
	}
</style>
