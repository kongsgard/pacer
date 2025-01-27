import { getContext, setContext } from 'svelte';
import { Duration } from './functions/duration';

const RUNNING_DATA_KEY = Symbol('RUNNING_DATA');

export function setRaceState() {
	return setContext(RUNNING_DATA_KEY, new RaceState());
}

export function getRaceState() {
	return getContext<ReturnType<typeof setRaceState>>(RUNNING_DATA_KEY);
}

class RaceState {
	targetTime = $state<Duration>(Duration.fromObject({}));
	raceDistance = $state<number | undefined>();
	splitDistance = $state<number | undefined>();
}
