export interface IDuration {
	hours: number;
	minutes: number;
	seconds: number;
}

export type IPartialDuration = Partial<IDuration>;

export class Duration implements IDuration {
	public constructor(public hours: number, public minutes: number, public seconds: number) {
		[hours, minutes, seconds].forEach((unit) => {
			if (unit < 0 || !Number.isInteger(unit)) {
				throw new Error(`Invalid input: ${hours}:${minutes}:${seconds}`);
			}
		});

		this.hours = hours;
		this.minutes = minutes;
		this.seconds = seconds;
		this.normalize();
	}

	public static fromObject(duration: IPartialDuration) {
		return new Duration(duration.hours ?? 0, duration.minutes ?? 0, duration.seconds ?? 0);
	}

	public toString() {
		const pad = (unit: number) => {
			return unit.toString().padStart(2, '0');
		};

		if (this.hours > 0) {
			return `${this.hours}:${pad(this.minutes)}:${pad(this.seconds)}`;
		}
		return `${this.minutes}:${pad(this.seconds)}`;
	}

	public add(duration: IPartialDuration) {
		this.hours += duration.hours ?? 0;
		this.minutes += duration.minutes ?? 0;
		this.seconds += duration.seconds ?? 0;
		this.normalize();
		return this;
	}

	private normalize() {
		this.minutes += Math.floor(this.seconds / 60);
		this.seconds %= 60;

		this.hours += Math.floor(this.minutes / 60);
		this.minutes %= 60;
	}
}
