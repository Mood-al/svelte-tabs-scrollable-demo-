<script>
	import { t } from '../i18n';

	export let title;
	export let content;
	export let isHashSelected;
</script>

<div class="d-flex align-items-center">
	<h2 class="display-5 mt-3 mb-0 fw-normal ">
		<a href={`#${title}`} class={`display-5 ${isHashSelected ? 'text-warning' : 'text-muted'}`}
			>#{$t(title)}</a
		>
	</h2>
</div>
<p class="text-muted text-lead lead ms-4">
	{content}
</p>
