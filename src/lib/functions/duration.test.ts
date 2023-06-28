import { describe, it, expect } from 'vitest';
import { Duration } from './duration';

describe('duration test', () => {
	it('adds 1 second to 59 seconds to equal 1 minute', () => {
		const duration = Duration.fromObject({ seconds: 59 });
		expect(duration.add({ seconds: 1 })).toStrictEqual(Duration.fromObject({ minutes: 1 }));
	});

	it('adds 1 second to 59 minutes and 59 seconds to equal 1 hour', () => {
		const duration = Duration.fromObject({ minutes: 59, seconds: 59 });
		expect(duration.add({ seconds: 1 })).toStrictEqual(Duration.fromObject({ hours: 1 }));
	});

	it('adds 60 seconds to 60 seconds to equal 2 minutes', () => {
		const duration = Duration.fromObject({ seconds: 60 });
		expect(duration.add({ seconds: 60 })).toStrictEqual(Duration.fromObject({ minutes: 2 }));
	});

	it('subtracts 1 second from 1 minute to equal 59 seconds', () => {
		const duration = Duration.fromObject({ minutes: 1 });
		expect(duration.subtract({ seconds: 1 })).toStrictEqual(Duration.fromObject({ seconds: 59 }));
	});

	it('double a duration of 1 minute equals 2 minutes', () => {
		const duration = Duration.fromObject({ minutes: 1 });
		expect(duration.multiply(2)).toStrictEqual(Duration.fromObject({ minutes: 2 }));
	});

	it('halve a duration of 1 minute equals 30 seconds', () => {
		const duration = Duration.fromObject({ minutes: 1 });
		expect(duration.divide(2)).toStrictEqual(Duration.fromObject({ seconds: 30 }));
	});
});
