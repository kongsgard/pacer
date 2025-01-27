<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		onclick: () => void;
	};
	let { children, onclick }: Props = $props();
</script>

<button {onclick}>
	{@render children()}
</button>

<style>
	button {
		background-color: #fff;
		color: #242428;
		align-items: center;
		border: 1px solid #dfdfe8;
		border-radius: 4px;
		cursor: pointer;
		padding: 6px 10px;
	}

	button:hover {
		background-color: #e6e6e6;
		border-color: #bbbbce;
	}

	button:active {
		background-color: #e6e6e6;
		border-color: #bbbbce;
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
		outline: 0;
	}
</style>
