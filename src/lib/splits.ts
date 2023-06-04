import { Duration } from './duration';

export function computeCumulativeTime(splits: Duration[]) {
	return splits.reduce(
		(a, b, i) => (i === 0 ? [b] : [...a, b.add(a[i - 1])]),
		[Duration.fromObject({})]
	);
}

export function computeEqualSplits(
	totalTime: Duration,
	totalDistance: number,
	splitDistance: number
): Duration[] {
	const splitCount = totalDistance / splitDistance;
	const fullSplitCount = Math.floor(splitCount);

	const splitTime = totalTime.divide(splitCount);

	const splits: Duration[] = Array(Math.floor(fullSplitCount)).fill(splitTime);
	if (0 < splitCount - fullSplitCount && splitCount - fullSplitCount < 1) {
		splits.push(splitTime.multiply(splitCount - fullSplitCount));
	}

	const splitsSum = splits.reduce((a, b) => a.add(b), Duration.fromObject({}));
	for (let i = 0; i < totalTime.subtract(splitsSum).seconds; i++) {
		splits[i] = splits[i].add(Duration.fromObject({ seconds: 1 }));
	}

	return splits;
}
