<script lang="ts">
	import { DataTable } from '$lib/components/data-table';
	import RaceDistance from './race-distance.svelte';
	import { Duration } from '$lib/functions/duration';

	const totalTime = Duration.fromObject({ minutes: 36, seconds: 59 });
	const splitDistance = 1;
</script>

<main>
	<RaceDistance />
	<DataTable {totalTime} {splitDistance} />
</main>

<style>
	main {
		margin: 3rem 0.5rem 8rem 0.5rem;
	}
</style>
