<script>
	import CodeContainer from '../../components/CodeContainer.svelte';
	import CustomNavBtns from '../../components/CustomNavBtns.svelte';
	import SimpleTabs from '../../components/demos/SimpleTabs.svelte';
	import WithCustomIconsAndMuiLike from '../../components/demos/WithCustomIconsAndMuiLike.svelte';
	import WithCustomNavBtns from '../../components/demos/WithCustomNavBtns.svelte';
	import WithRouterNavigationBinding from '../../components/demos/WithRouterNavigationBinding.svelte';
	import WithTabsScreens from '../../components/demos/WithTabsScreens.svelte';
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
		title="WithTabsScreens"
		content="add tabs screens or tabs panels"
		replURL="https://svelte.dev/repl/662631701be040319c42f94544544a43?version=3.55.1"
		codesandboxURL="https://codesandbox.io/p/sandbox/svelte-tabs-scrollable-with-custom-navigation-button-example-forked-u1ljqu?file=%2Fsrc%2Froutes%2F%2Bpage.svelte&selection=%5B%7B%22endColumn%22%3A10%2C%22endLineNumber%22%3A9%2C%22startColumn%22%3A10%2C%22startLineNumber%22%3A9%7D%5D"
		exampleComponent={WithTabsScreens}
	/>
	<CodeContainer
		title="WithCustomNavBtns"
		content="add custom navigation buttons to the tabs"
		replURL="https://svelte.dev/repl/671cad39dea34aec970a1dbe6c2ea7fa?version=3.55.0"
		codesandboxURL="https://codesandbox.io/p/sandbox/svelte-tabs-scrollable-example-forked-ti4bot?selection=%5B%7B%22endColumn%22%3A8%2C%22endLineNumber%22%3A21%2C%22startColumn%22%3A8%2C%22startLineNumber%22%3A21%7D%5D&file=%2Fsrc%2Froutes%2F%2Bpage.svelte"
		exampleComponent={WithCustomNavBtns}
	/>
	<CodeContainer
		title="WithCustomIconsAndMuiLike"
		content="add custom navigation icons with Mui like style"
		replURL="https://svelte.dev/repl/cf1231d17a1648e5bf6c2fad924a225e?version=3.55.0"
		codesandboxURL="https://codesandbox.io/p/sandbox/svelte-tabs-scrollable-with-tabs-screens-tabs-panels-forked-0lslrw?file=%2Fsrc%2Froutes%2F%2Bpage.svelte&selection=%5B%7B%22endColumn%22%3A1%2C%22endLineNumber%22%3A12%2C%22startColumn%22%3A1%2C%22startLineNumber%22%3A12%7D%5D"
		exampleComponent={WithCustomIconsAndMuiLike}
	/>
	<!-- <CodeContainer
		title="WithRouterNavigationBinding"
		content="Bind the tabs navigation with your dynamic routes"
		replURL="https://svelte.dev/repl/cf1231d17a1648e5bf6c2fad924a225e?version=3.55.0"
		codesandboxURL="https://codesandbox.io/p/sandbox/svelte-tabs-scrollable-with-tabs-screens-tabs-panels-forked-0lslrw?file=%2Fsrc%2Froutes%2F%2Bpage.svelte&selection=%5B%7B%22endColumn%22%3A1%2C%22endLineNumber%22%3A12%2C%22startColumn%22%3A1%2C%22startLineNumber%22%3A12%7D%5D"
		exampleComponent={WithRouterNavigationBinding}
	/> -->
	<!-- <p>
		This section needs a lot of work and I dont have much time so it might take long to finish it
		-_- please Visit <a
			class="display-5 text-warning"
			target="_blank"
			rel="noopener noreferrer"
			href="https://react-tabs-scrollable.vercel.app/demos">react-tabs-scrollable</a
		>'s website to see the demo on React they both have the same API
	</p> -->
</div>

<main class="mb-3">
	<slot />
</main>
