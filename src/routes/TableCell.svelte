<script lang="ts" context="module">
	export enum CellType {
		Default,
		Disabled,
		TimeDuration
	}
</script>

<script lang="ts">
	export let cellType: CellType = CellType.Default;
	export let cellValue: string;

	let isFocused = false;
	const toggleFocus = () => (isFocused = !isFocused);

	const autofocus = (el: HTMLInputElement) => el.focus();
</script>

{#if cellType == CellType.Disabled}
	<td>{cellValue}</td>
{:else}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<td on:click={toggleFocus}>
		{#if isFocused}
			{#if cellType == CellType.Default}
				<!-- svelte-ignore a11y-autofocus -->
				<input use:autofocus on:blur={toggleFocus} bind:value={cellValue} />
			{:else if cellType == CellType.TimeDuration}
				ABC
			{/if}
		{:else}
			<!-- svelte-ignore a11y-no-noninteractive-tabindex a11y-missing-attribute a11y-missing-content -->
			<a on:focus={toggleFocus} tabindex="0" />
			{cellValue}
			<abbr class="unit" title="kilometers">km</abbr>
		{/if}
	</td>
{/if}

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
</style>
