import { ApeType } from '../../ApeType';
import { randRange } from '../../utils/randomizer';

class ApeDate implements ApeType {
  private startDate: Date = new Date(0);
  private endDate: Date = new Date();
  private useRandom: boolean = false;

  private now: number = new Date().getTime();
  private minuteInMS: number = 60 * 1000;
  private hourInMS: number = 60 * this.minuteInMS;
  private dayInMS: number = 24 * this.hourInMS;
  private yearInMS: number = 365 * this.dayInMS;

  random() {
    this.useRandom = true;
    return this;
  }

  startMinutesAgo(minutes: number) {
    const minutesInMS = this.minuteInMS * minutes;
    this.startDate = new Date(this.now - minutesInMS);
    return this;
  }

  startDaysAgo(days: number) {
    const daysInMS = this.dayInMS * days;
    this.startDate = new Date(this.now - daysInMS);
    return this;
  }

  startYearsAgo(years: number) {
    const yearsInMS = this.yearInMS * years;
    this.startDate = new Date(this.now - yearsInMS);
    return this;
  }

  endMinutesAgo(minutes: number) {
    const minutesInMS = this.minuteInMS * minutes;
    this.endDate = new Date(this.now - minutesInMS);
    return this;
  }

  endDaysAgo(days: number) {
    const daysInMS = this.dayInMS * days;
    this.endDate = new Date(this.now - daysInMS);
    return this;
  }

  endYearsAgo(years: number) {
    const yearsInMS = this.yearInMS * years;
    this.endDate = new Date(this.now - yearsInMS);
    return this;
  }

  startAt(date: Date) {
    this.startDate = new Date(date);
    return this;
  }

  endAt(date: Date) {
    this.endDate = new Date(date);
    return this;
  }

  generate() {
    if (!this.useRandom) {
      return this.endDate;
    }

    const start = this.startDate.getTime();
    const end = this.endDate.getTime();

    return new Date(randRange(start, end));
  }
}

export const date = () => new ApeDate();