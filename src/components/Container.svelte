<script>
	export let title;
	export let badge = undefined;
</script>

<div>
	<h2 class="display-5 my-3 fw-normal">
		{#if badge}
			<span class="fs-6 badge rounded-pill bg-danger">{badge}</span>
		{/if}
		{title}
	</h2>
	<slot />
</div>

<style>
	h2 {
		position: relative;
		display: inline-block;
	}
	span {
		position: absolute;
		top: 0;
		right: -40px;
		transform: scale(1);
		animation: pulse-black 2s infinite;
	}

	@keyframes pulse-black {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		}
	}
</style>
