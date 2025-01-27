<script lang="ts">
	import { DataTable } from '$lib/components/data-table';
	import { setRaceState } from '$lib/race-state.svelte';
	import RaceDistance from './race-distance.svelte';
	import SplitDistance from './split-distance.svelte';
	import TargetTime from './target-time.svelte';

	setRaceState();
</script>

<main>
	<RaceDistance />
	<SplitDistance />
	<TargetTime />
	<DataTable />
</main>

<style>
	main {
		margin: 3rem 0.5rem 8rem 0.5rem;
	}
</style>
