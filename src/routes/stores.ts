import { Duration } from '$lib/functions/duration';
import { writable } from 'svelte/store';

export interface IRaceDetails {
	targetTime: Duration;
	raceDistance?: number;
	splitDistance?: number;
}

export const raceDetails = writable<IRaceDetails>({
	targetTime: Duration.fromObject({}),
	raceDistance: undefined,
	splitDistance: undefined
});
