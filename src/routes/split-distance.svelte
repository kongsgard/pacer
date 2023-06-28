<script lang="ts">
	import { Button, FieldSet, Legend, NumberInput } from '$lib/components';
	import { raceDetails } from './stores';
</script>

<FieldSet>
	<Legend>Split Distance</Legend>

	<div class="custom-input">
		<NumberInput inputmode="decimal" bind:value={$raceDetails.splitDistance} />
		<div>kilometers</div>
	</div>

	<div class="button-group">
		<Button on:click={() => ($raceDetails.splitDistance = 0.2)}>200 m</Button>
		<Button on:click={() => ($raceDetails.splitDistance = 0.4)}>400 m</Button>
		<Button on:click={() => ($raceDetails.splitDistance = 1)}>1 km</Button>
		<Button on:click={() => ($raceDetails.splitDistance = 2)}>2 km</Button>
		<Button on:click={() => ($raceDetails.splitDistance = 5)}>5 km</Button>
	</div>
</FieldSet>

<style>
	.custom-input {
		display: flex;
	}

	.custom-input > div {
		display: flex;
		align-items: center;
		background-color: #fff;
		color: #242428;
		border: 1px solid #dfdfe8;
		border-left: 0;
		border-radius: 0 4px 4px 0;
		padding: 6px 10px;
	}

	.button-group {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
