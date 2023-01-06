<script>
	export let isRightArrowDisapled;
	export let isLeftArrowDisapled;
	export let activeTab;
</script>

<div class="row my-3">
	<ul class="list-group list-group-flush col-md-6">
		<li class="list-group-item">
			reached the start of tabs container :{' '}
			<span class="badge bg-primary">
				{' '}
				{isLeftArrowDisapled ? 'true' : 'false'}
			</span>
		</li>
		<li class="list-group-item">
			selected tab index :{' '}
			<span class="badge bg-primary"> {activeTab}</span>
		</li>
		<li class="list-group-item" />
	</ul>
	<ul class="list-group list-group-flush col-md-6">
		<li class="list-group-item">
			reached the end of tabs container :{' '}
			<span class="badge bg-primary">
				{' '}
				{isRightArrowDisapled ? 'true' : 'false'}
			</span>
		</li>

		<li class="list-group-item" />
	</ul>
</div>
