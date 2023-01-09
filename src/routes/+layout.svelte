<script>
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
	import '../styles/bootstrap.min.css';
	import '../styles/main.css';
	import '../styles/main.rtl.css';
</script>

<Navbar />
<svelte:head>
	<title>svelte tabs scrollable</title>
	<meta name="google-site-verification" content="uti4mWncYz-dPMY1zuIP-tSk5DqnL4-K3E4FX9fkGaE" />
	<meta
		name="description"
		content="A simple svelte component for scrollable tabs that supports rtl and many other features"
	/>
	<meta
		name="keywords"
		content="svelte,component,tabs, svelte-tabs-scrollable, scrollable, HTML, CSS, JavaScript , svelte-tabs ,svelte scrollable tabs , svelte tabs , svelte tabs scrollable"
	/>
	<meta name="author" content="Muhammed Aliwi" />
</svelte:head>
<main class="mb-3">
	<slot />
</main>
<div class="border mb-3" />
<div class="container mb-3">
	<div class="border-top border-bottom border-2  border-danger fs-5 p-3 text-wrap">
		Please consider giving me a star on the <a
			class="text-warning"
			target="_blank"
			rel="noopener noreferrer"
			href="https://github.com/Mood-al/svelte-tabs-scrollable">Github</a
		>'s repo it will give me motiviation to do more packages like this!
	</div>
</div>

<Footer />
