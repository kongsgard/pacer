import { Duration } from './duration';

export interface IRunningData {
	totalDistance: number;
	totalTime: Duration;
	splitTime: Duration;
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
	if (totalDistance == 0 || splitDistance == 0) {
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
			totalDistance: parseFloat(totalDistances[i].toFixed(1)),
			totalTime: totalTimes[i],
			splitTime: splits[i],
			pace: splitsPace[i]
		}));
}

export function updateRunningData(
	data: IRunningData[],
	value: Duration,
	index: number,
	key: keyof IRunningData
): IRunningData[] {
	switch (key) {
		case 'totalTime': {
			data[index].splitTime = value.subtract(data[index - 1]?.totalTime ?? Duration.fromObject({}));
			data[index].pace = data[index].splitTime.divide(
				data[index].totalDistance - (data[index - 1]?.totalDistance ?? 0)
			);
			break;
		}
		case 'splitTime': {
			data[index].splitTime = value;
			data[index].pace = value.divide(
				data[index].totalDistance - (data[index - 1]?.totalDistance ?? 0)
			);
			break;
		}
		case 'pace': {
			data[index].splitTime = value.multiply(
				data[index].totalDistance - (data[index - 1]?.totalDistance ?? 0)
			);
			data[index].pace = value;
			break;
		}
	}

	const totalTimes = computeCumulativeTime(data.map((e) => e.splitTime));
	data.forEach((e, i) => (e.totalTime = totalTimes[i]));

	return data;
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
	if (totalDistance - splitDistancesSum > 0.01) {
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
