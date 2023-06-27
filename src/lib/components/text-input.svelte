<script lang="ts">
	import type { HTMLInputTypeAttribute } from 'svelte/elements.d.ts';

	export let type: HTMLInputTypeAttribute = 'text';
	export let inputmode:
		| 'none'
		| 'text'
		| 'tel'
		| 'url'
		| 'email'
		| 'numeric'
		| 'decimal'
		| 'search' = 'text';
	export let value: any = undefined;

	const typeAction = (node: HTMLInputElement) => {
		node.type = type;
	};
</script>

<input use:typeAction {inputmode} on:blur bind:value />

<style>
	input {
		width: 12rem;
		padding: 0 1rem;
		text-align: center;
		border: 1px solid #dfdfe8;
	}

	input:focus {
		border-color: #007fb6;
		outline: 0;
		appearance: none;
	}
</style>
