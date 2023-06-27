<script lang="ts">
	import { Duration } from '$lib/duration';
	import { computeRunningData } from '$lib/splits';
	import TableCell from './TableCell.svelte';

	const totalTime = Duration.fromObject({ minutes: 36, seconds: 59 });
	const totalDistance = 10;
	const splitDistance = 1;

	let columns = ['Split Distance', 'Split Time', 'Total Distance', 'Total Time', 'Pace'];
	const data = computeRunningData(totalTime, totalDistance, splitDistance);
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
				{#each row as cell}
					<TableCell cellValue={cell} />
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	:global(body) {
		max-width: 1024px;
		margin: 0 auto;
		font-family: Segoe UI, Helvetica Neue, -apple-system, system-ui, BlinkMacSystemFont, Roboto,
			Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
		font-size: 14px;
	}

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
