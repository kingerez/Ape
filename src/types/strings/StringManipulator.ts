import { ApeType } from "../../ApeType";

const punctuationsRegex = /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g;

export class StringManipulator implements ApeType {
  private shouldRandomizeContent = false;
  private randomLength = -1;
  private minRandomLength = 1;
  private length: number = null;
  private shouldRandomizeSequence: boolean = false;
  private shouldRemovePunctuations: boolean = false;

  private stringAsArray: string[] = [];

  constructor(private baseString: string) {
    this.stringAsArray = baseString.split(' ');
    this.length = this.stringAsArray.length;
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

  randomizeOrder() {
    this.shouldRandomizeContent = true;
    return this;
  }

  randomSequence() {
    this.shouldRandomizeSequence = true;
    return this;
  }

  noPunctuation() {
    this.shouldRemovePunctuations = true;
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

    return this.shouldRemovePunctuations ? result.join(' ').replace(punctuationsRegex, '') : result.join(' ');
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