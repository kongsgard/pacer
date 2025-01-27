<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<legend>
	{@render children()}
</legend>

<style>
	legend {
		color: #242428;
		font-size: 12px;
		margin-top: 0;
		margin-bottom: 5px;
		padding: 0;
	}
</style>
