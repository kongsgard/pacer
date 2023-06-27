<script lang="ts">
	import { Duration } from '$lib/functions/duration';
	import { computeRunningData, type IRunningData } from '$lib/functions/splits';
	import { raceDetails } from '../../../routes/stores';
	import TableCell, { CellSuffix } from './table-cell.svelte';

	export let totalTime: Duration = Duration.fromObject({ minutes: 30 });
	export let splitDistance: number = 1;

	let columns = ['Split Distance', 'Split Time', 'Total Distance', 'Total Time', 'Pace'];
	let data: IRunningData[] = [];
	$: data = computeRunningData(totalTime, $raceDetails.raceDistance, splitDistance);
</script>

<table>
	<thead>
		<tr>
			{#each columns as column}
				<th>{column}</th>
			{/each}
		</tr>
	</thead>

	<tbody>
		{#each data as row}
			<tr>
				<TableCell cellValue={row.splitDistance} cellSuffix={CellSuffix.Kilometer} />
				<TableCell cellValue={row.splitTime} cellSuffix={CellSuffix.MinutesPerKilometer} />
				<TableCell cellValue={row.totalDistance} cellSuffix={CellSuffix.Kilometer} />
				<TableCell cellValue={row.totalTime} cellSuffix={CellSuffix.MinutesPerKilometer} />
				<TableCell cellValue={row.pace} cellSuffix={CellSuffix.MinutesPerKilometer} />
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		margin: 0 auto;
		border: 1px solid #dfdfe8;
		border-collapse: collapse;
		width: 100%;
	}

	tr {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	tbody tr:hover {
		background-color: rgba(0, 0, 0, 0.02);
		cursor: pointer;
	}

	th {
		background-color: #f7f7fa;
		font-weight: 600;
		border-bottom: 1px solid #dfdfe8;

		padding: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
