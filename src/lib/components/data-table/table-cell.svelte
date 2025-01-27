<script lang="ts" module>
	export enum CellSuffix {
		None,
		Kilometer,
		MinutesPerKilometer
	}
</script>

<script lang="ts">
	import { Duration } from '$lib/functions/duration';
	import type { IRunningData } from '$lib/functions/splits';

	type Props = {
		onChange: (value: Duration, rowIndex: number, key: keyof IRunningData) => void;
		rowIndex: number;
		key: keyof IRunningData;
		cellValue: number | Duration;
		cellSuffix?: CellSuffix;
	};
	let { onChange, rowIndex, key, cellValue, cellSuffix = CellSuffix.None }: Props = $props();

	let isFocused = $state(false);
	const onFocus = () => (isFocused = true);
	const onBlur = (event: Event) => {
		isFocused = false;
		if (cellValue instanceof Duration) {
			const target = event.target as HTMLInputElement;
			const duration = Duration.fromString(target.value);
			if (JSON.stringify(duration) != JSON.stringify(cellValue)) {
				onChange(duration, rowIndex, key);
			}
		}
	};

	const autofocus = (el: HTMLInputElement) => el.focus();
</script>

<td onclick={onFocus}>
	{#if isFocused}
		<input use:autofocus onblur={onBlur} value={cellValue} />
	{:else}
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<!-- svelte-ignore a11y_missing_attribute -->
		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<a onfocus={onFocus} tabindex="0"></a>
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
