import { Duration } from './duration';

export interface IRunningData {
	splitDistance: number;
	splitTime: Duration;
	totalDistance: number;
	totalTime: Duration;
	pace: Duration;
}

export function computeRunningData(
	totalTime: Duration,
	totalDistance?: number,
	splitDistance?: number
): IRunningData[] {
	if (!totalDistance || !splitDistance) {
		return [];
	}

	const splitDistances = computeSplitDistances(totalDistance, splitDistance);
	const splits = computeEqualSplits(totalTime, totalDistance, splitDistance);
	const totalDistances = computeCumulativeNumber(splitDistances);
	const totalTimes = computeCumulativeTime(splits);
	const splitsPace = computeSplitsPace(splits, splitDistances);

	const data = [splitDistances, splits, totalDistances, totalTimes, splitsPace];
	return Array(Math.max(...data.map((a) => a.length)))
		.fill('')
		.map((_, i) => ({
			splitDistance: splitDistances[i],
			splitTime: splits[i],
			totalDistance: totalDistances[i],
			totalTime: totalTimes[i],
			pace: splitsPace[i]
		}));
}

function computeCumulativeNumber(splits: number[]) {
	return splits.reduce((a, b, i) => (i === 0 ? [b] : [...a, (b += a[i - 1])]), [0]);
}

export function computeCumulativeTime(splits: Duration[]) {
	return splits.reduce(
		(a, b, i) => (i === 0 ? [b] : [...a, b.add(a[i - 1])]),
		[Duration.fromObject({})]
	);
}

function computeSplitDistances(totalDistance: number, splitDistance: number): number[] {
	const fullSplitCount = Math.floor(totalDistance / splitDistance);
	const splitDistances: number[] = Array(Math.floor(fullSplitCount)).fill(splitDistance);

	const splitDistancesSum = splitDistances.reduce((a, b) => (a += b), 0);
	if (totalDistance - splitDistancesSum > 0) {
		splitDistances.push(totalDistance - splitDistancesSum);
	}
	return splitDistances;
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

function computeSplitsPace(splits: Duration[], splitDistances: number[]) {
	return splits.map((split, index) => split.divide(splitDistances[index]));
}
