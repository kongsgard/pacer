<script lang="ts" context="module">
	export enum CellSuffix {
		None,
		Kilometer,
		MinutesPerKilometer
	}
</script>

<script lang="ts">
	import { Duration } from '$lib/functions/duration';

	export let cellValue: number | Duration;
	export let cellSuffix: CellSuffix = CellSuffix.None;

	let isFocused = false;
	const toggleFocus = () => (isFocused = !isFocused);

	const autofocus = (el: HTMLInputElement) => el.focus();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<td on:click={toggleFocus}>
	{#if isFocused}
		<!-- svelte-ignore a11y-autofocus -->
		{#if cellValue instanceof Duration}
			<input use:autofocus on:blur={toggleFocus} bind:value={cellValue} />
		{:else}
			<input use:autofocus on:blur={toggleFocus} bind:value={cellValue} />
		{/if}
	{:else}
		<!-- svelte-ignore a11y-no-noninteractive-tabindex a11y-missing-attribute a11y-missing-content -->
		<a on:focus={toggleFocus} tabindex="0" />
		{cellValue}
		{#if cellSuffix == CellSuffix.Kilometer}
			<abbr class="unit" title="kilometers">km</abbr>
		{:else if cellSuffix == CellSuffix.MinutesPerKilometer}
			<abbr class="unit" title="minutes per kilometer">/km</abbr>
		{/if}
	{/if}
</td>

<style>
	abbr[title] {
		text-decoration: none;
	}

	.unit {
		font-size: 11px;
	}

	td {
		border-bottom: 1px solid #f0f0f5;

		height: 30px;
		line-height: 30px;
		text-align: center;
	}

	td:focus {
		background: #eee;
	}

	input {
		width: 100%;
		height: 100%;
		text-align: center;
		border: 1px solid #dfdfe8;
	}

	input:focus {
		border-color: #007fb6;
		outline: 0;
		appearance: none;
	}
</style>
