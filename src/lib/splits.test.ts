import { describe, it, expect } from 'vitest';
import { computeCumulativeTime, computeEqualSplits } from './splits';
import { Duration } from './duration';

describe('splits test', () => {
	it('accumulates time from duration array', () => {
		const splits = [
			Duration.fromObject({ seconds: 1 }),
			Duration.fromObject({ minutes: 1 }),
			Duration.fromObject({ hours: 1 })
		];

		const expectedTotalTime = [
			Duration.fromObject({ seconds: 1 }),
			Duration.fromObject({ minutes: 1, seconds: 1 }),
			Duration.fromObject({ hours: 1, minutes: 1, seconds: 1 })
		];
		expect(computeCumulativeTime(splits)).toStrictEqual(expectedTotalTime);
	});

	it('computes splits [6:00, 6:00, 3:00] for a 5k with 2k splits', () => {
		const totalTime = Duration.fromObject({ minutes: 15 });
		const totalDistance = 5;
		const splitDistance = 2;

		const expectedSplits = [
			Duration.fromObject({ minutes: 6 }),
			Duration.fromObject({ minutes: 6 }),
			Duration.fromObject({ minutes: 3 })
		];
		expect(computeEqualSplits(totalTime, totalDistance, splitDistance)).toStrictEqual(
			expectedSplits
		);
	});
});
