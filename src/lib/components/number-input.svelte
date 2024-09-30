<script lang="ts">
	export let name: string | undefined = undefined;
	export let inputmode:
		| 'none'
		| 'text'
		| 'tel'
		| 'url'
		| 'email'
		| 'numeric'
		| 'decimal'
		| 'search' = 'text';
	export let value: number | undefined = undefined;
</script>

<input type="number" {name} {inputmode} on:blur on:focus bind:value />

<style>
	input {
		width: var(--width, 12rem);
		padding: 6px 10px;
		padding-right: var(--padding-right, 6px);
		text-align: var(--text-align, center);
		border: 1px solid #dfdfe8;
		border-left-width: var(--border-left-width, 1px);
		border-right-width: var(--border-right-width, 1px);
		color: #242428;
	}

	input:focus {
		border-color: #007fb6;
		outline: 0;
		appearance: none;
	}
</style>
