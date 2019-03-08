import { ApeType } from "../../ApeType";

export class StringManipulator implements ApeType {
  private shouldRandomizeContent = false;
  // -1 for no randomization, any positive value to get a random number of words
  private randomLength = -1;
  // any value between 1 and length
  private minRandomLength = 1;
  // -1 to return all string, positive value is the maximum number of characters
  private length: number = null;
  // create the string sequence from random words within the original text, and not according to its original order
  private shouldRandomizeSequence: boolean = false;

  private stringAsArray: string[] = [];

  constructor(private baseString: string) {
    this.stringAsArray = baseString.split(' ');
    this.length = this.stringAsArray.length;
  }

  randomizeOrder() {
    this.shouldRandomizeContent = true;
    return this;
  }

  randomizeLength(length: number) {
    this.randomLength = length;
    return this;
  }

  minLength(length: number) {
    this.minRandomLength = length;
    return this;
  }

  maxLength(length: number) {
    this.length = length;
    return this;
  }

  randomSequence() {
    this.shouldRandomizeSequence = true;
    return this;
  }

  private getResultLength() {
    let length = Math.min(this.length, this.stringAsArray.length);
    const randomLength = Math.min(this.randomLength + 1, length);

    if (randomLength > 0) {
      const minRandomLength = Math.max(1, Math.min(this.minRandomLength, randomLength - 1));
      length = Math.floor(Math.random() * (randomLength - minRandomLength)) + minRandomLength;
    }

    return length;
  }

  private getFinalString(stringAsArray: string[]) {
    const result = [...stringAsArray];
    if (this.shouldRandomizeContent) {
      return this.randomizeStringArrayOrder(result).join(' ');
    }

    return result.join(' ');
  }

  private randomizeStringArrayOrder(stringAsArray: string[]) {
    const result = [...stringAsArray]
    for (let i = result.length - 1; i > 0; i = i - 1) {
      const random = Math.floor(Math.random() * (i + 1));
      [result[i], result[random]] = [result[random], result[i]];
    }

    return result;
  }

  generate() {
    // get actual length
    const length = this.getResultLength();
    const baseStringArray = (
      this.shouldRandomizeSequence
        ? this.randomizeStringArrayOrder(this.stringAsArray)
        : this.stringAsArray
    ).slice(0, length);
    return this.getFinalString(baseStringArray);
  }
}