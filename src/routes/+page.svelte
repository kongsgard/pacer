<script lang="ts">
	import RaceDistance from '$lib/components/RaceDistance.svelte';
	import Table from '$lib/components/Table.svelte';
	import { Duration } from '$lib/functions/duration';

	const totalTime = Duration.fromObject({ minutes: 36, seconds: 59 });
	const totalDistance = 10;
	const splitDistance = 1;
</script>

<main>
	<RaceDistance />
	<Table {totalTime} {totalDistance} {splitDistance} />
</main>

<style>
	main {
		margin: 3rem 0.5rem 8rem 0.5rem;
	}
</style>
