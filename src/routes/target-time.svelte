<script lang="ts">
	import { FieldSet, Legend, NumberInput } from '$lib/components';
	import { getRaceState } from '$lib/race-state.svelte';

	const raceState = getRaceState();

	function handleFocus(part: 'hours' | 'minutes' | 'seconds') {
		if (raceState.targetTime[part] === 0) {
			raceState.targetTime[part] = null as unknown as number;
		}
	}

	function handleBlur(part: 'hours' | 'minutes' | 'seconds') {
		if (raceState.targetTime[part] === null) {
			raceState.targetTime[part] = 0;
		}
	}
</script>

<FieldSet>
	<Legend>Target Time</Legend>

	<div class="duration-wrapper">
		<div class="input-field">
			<label for="time_hours">
				<abbr title="hours">hr</abbr>
			</label>
			<NumberInput
				name="time_hours"
				inputmode="numeric"
				bind:value={raceState.targetTime.hours}
				onfocus={() => handleFocus('hours')}
				onblur={() => handleBlur('hours')}
				--border-right-width="0"
				--width="8rem"
				--padding-right="34px"
				--text-align="right"
			/>
		</div>
		<div class="input-field">
			<label for="time_minutes">
				<abbr title="minutes">min</abbr>
			</label>
			<NumberInput
				name="time_minutes"
				inputmode="numeric"
				bind:value={raceState.targetTime.minutes}
				onfocus={() => handleFocus('minutes')}
				onblur={() => handleBlur('minutes')}
				--width="8rem"
				--padding-right="34px"
				--text-align="right"
			/>
		</div>
		<div class="input-field">
			<label for="time_seconds">
				<abbr title="seconds">s</abbr>
			</label>
			<NumberInput
				name="time_seconds"
				inputmode="numeric"
				bind:value={raceState.targetTime.seconds}
				onfocus={() => handleFocus('seconds')}
				onblur={() => handleBlur('seconds')}
				--border-left-width="0"
				--width="8rem"
				--padding-right="34px"
				--text-align="right"
			/>
		</div>
	</div>
</FieldSet>

<style>
	.duration-wrapper {
		display: flex;
	}

	.input-field {
		position: relative;
	}

	label {
		position: absolute;
		top: 0.95rem;
		left: 4.8rem;
		color: #666;
		font-size: 1.2rem;
		user-select: none;
		pointer-events: none;
	}

	abbr[title] {
		text-decoration: none;
	}
</style>
