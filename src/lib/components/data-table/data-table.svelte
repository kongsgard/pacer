<script lang="ts">
	import type { Duration } from '$lib/functions/duration';
	import { computeRunningData, updateRunningData, type IRunningData } from '$lib/functions/splits';
	import { raceDetails } from '../../../routes/stores';
	import TableCell, { CellSuffix } from './table-cell.svelte';

	let columns = ['Distance', 'Total Time', 'Split Time', 'Pace'];
	let data: IRunningData[] = [];
	$: data = computeRunningData(
		$raceDetails.targetTime,
		$raceDetails.raceDistance,
		$raceDetails.splitDistance
	);

	const onChange = (value: Duration, rowIndex: number, key: keyof IRunningData) => {
		data = updateRunningData(data, value, rowIndex, key);
	};
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
		{#each data as row, rowIndex}
			<tr>
				<TableCell
					cellValue={row.totalDistance}
					{onChange}
					{rowIndex}
					key={'totalDistance'}
					cellSuffix={CellSuffix.Kilometer}
				/>
				<TableCell cellValue={row.totalTime} {onChange} {rowIndex} key={'totalTime'} />
				<TableCell cellValue={row.splitTime} {onChange} {rowIndex} key={'splitTime'} />
				<TableCell
					cellValue={row.pace}
					{onChange}
					{rowIndex}
					key={'pace'}
					cellSuffix={CellSuffix.MinutesPerKilometer}
				/>
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
		grid-template-columns: repeat(4, 1fr);
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
