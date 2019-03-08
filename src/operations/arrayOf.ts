import { apeGenerator } from '../apeGenerator';

class ApeArray {
  private maxRepetitions: number = 1;
  private useRandom: boolean = false;
  private minRepetitions: number = 1;

  constructor(private element: any) { }

  repeat(repetitions: number) {
    this.maxRepetitions = repetitions;
    return this;
  }

  random(repetitions: number, minRepetitions: number = 1) {
    this.maxRepetitions = repetitions;
    this.minRepetitions = minRepetitions;
    this.useRandom = true;
    return this;
  }

  generate() {
    const repetitions = this.useRandom ? Math.floor(Math.random() * (this.maxRepetitions - this.minRepetitions)) + this.minRepetitions : this.maxRepetitions;
    return Array(repetitions).fill(this.element).map((el: any) => {
      return apeGenerator(el);
    });
  }
}

export const arrayOf = (element: any) => new ApeArray(element);