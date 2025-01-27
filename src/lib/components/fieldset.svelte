<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<fieldset>
	{@render children()}
</fieldset>

<style>
	fieldset {
		border: 0;
		padding: 0;
		margin-bottom: 3rem;

		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
