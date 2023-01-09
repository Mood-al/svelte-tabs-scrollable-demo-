<script>
	import CodeContainer from '../../components/CodeContainer.svelte';
	import CustomNavBtns from '../../components/CustomNavBtns.svelte';
	import SimpleTabs from '../../components/demos/SimpleTabs.svelte';
	import WithCustomNavBtns from '../../components/demos/WithCustomNavBtns.svelte';
</script>

<svelte:head>
	<title>svelte tabs scrollable | demos</title>

	<meta name="description" content="examples and demos for svelte tabs scrollable package" />
	<meta
		name="keywords"
		content="svelte tabs demos, tabs demos , svelte tabs examples , scrollable tabs examples, svelte tabs scrollable examples , svelte scrollable tabs examples"
	/>
</svelte:head>

<div class="container">
	<CodeContainer
		title="simple_tabs"
		content="simple scrollable tabs' example"
		replURL="https://svelte.dev/repl/bdbe65797dbf4ed894536fc19b611897?version=3.55.0"
		codesandboxURL="https://codesandbox.io/p/sandbox/upbeat-brook-qqm68l?file=%2Fsrc%2Froutes%2F%2Bpage.svelte&selection=%5B%7B%22endColumn%22%3A39%2C%22endLineNumber%22%3A9%2C%22startColumn%22%3A39%2C%22startLineNumber%22%3A9%7D%5D"
		exampleComponent={SimpleTabs}
	/>
	<CodeContainer
		title="WithCustomNavBtns"
		content="add custom navigation buttons to the tabs"
		replURL="https://svelte.dev/repl/671cad39dea34aec970a1dbe6c2ea7fa?version=3.55.0"
		codesandboxURL="https://codesandbox.io/p/sandbox/svelte-tabs-scrollable-example-forked-ti4bot?selection=%5B%7B%22endColumn%22%3A8%2C%22endLineNumber%22%3A21%2C%22startColumn%22%3A8%2C%22startLineNumber%22%3A21%7D%5D&file=%2Fsrc%2Froutes%2F%2Bpage.svelte"
		exampleComponent={WithCustomNavBtns}
	/>
	<p>
		This section needs a lot of work and I dont have much time so it might take long to finish it
		-_- please Visit <a
			class="display-5 text-warning"
			target="_blank"
			rel="noopener noreferrer"
			href="https://react-tabs-scrollable.vercel.app/demos">react-tabs-scrollable</a
		>'s website to see the demo on React they both have the same API
	</p>
</div>

<main class="mb-3">
	<slot />
</main>
