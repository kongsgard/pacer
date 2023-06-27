<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import { Duration } from '$lib/functions/duration';

	const totalTime = Duration.fromObject({ minutes: 36, seconds: 59 });
	const totalDistance = 10;
	const splitDistance = 1;
</script>

<Table {totalTime} {totalDistance} {splitDistance} />
