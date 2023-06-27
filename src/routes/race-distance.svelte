<script lang="ts">
	import { Button, FieldSet, Legend, TextInput } from '$lib/components';
	import { raceDetails } from './stores';
</script>

<FieldSet>
	<Legend>Race Distance</Legend>

	<div class="custom-input">
		<TextInput type="number" inputmode="decimal" bind:value={$raceDetails.raceDistance} />
		<div>kilometers</div>
	</div>

	<div class="button-group">
		<Button on:click={() => ($raceDetails.raceDistance = 3)}>3 km</Button>
		<Button on:click={() => ($raceDetails.raceDistance = 5)}>5 km</Button>
		<Button on:click={() => ($raceDetails.raceDistance = 10)}>10 km</Button>
		<Button on:click={() => ($raceDetails.raceDistance = 21.1)}>21.1 km</Button>
		<Button on:click={() => ($raceDetails.raceDistance = 42.2)}>42.2 km</Button>
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
