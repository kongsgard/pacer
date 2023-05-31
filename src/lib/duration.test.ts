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
});
