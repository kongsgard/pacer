<script lang="ts">
	type Props = {
		name?: string | undefined;
		inputmode: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
		value: number | undefined;
		onblur?: () => void;
		onfocus?: () => void;
	};
	let {
		name = undefined,
		inputmode = 'text',
		value = $bindable(),
		onblur = () => {},
		onfocus = () => {}
	}: Props = $props();
</script>

<input type="number" {name} {inputmode} {onblur} {onfocus} bind:value />

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
