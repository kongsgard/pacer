<script lang="ts">
	import { FieldSet, Legend, NumberInput } from '$lib/components';
	import { raceDetails } from './stores';
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
				bind:value={$raceDetails.targetTime.hours}
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
				bind:value={$raceDetails.targetTime.minutes}
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
				bind:value={$raceDetails.targetTime.seconds}
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
