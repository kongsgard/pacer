<script lang="ts">
	import { DataTable } from '$lib/components/data-table';
	import RaceDistance from './race-distance.svelte';
	import SplitDistance from './split-distance.svelte';
</script>

<main>
	<RaceDistance />
	<SplitDistance />
	<DataTable />
</main>

<style>
	main {
		margin: 3rem 0.5rem 8rem 0.5rem;
	}
</style>
