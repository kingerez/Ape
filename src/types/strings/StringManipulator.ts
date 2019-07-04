import { ApeType } from "../../ApeType";

export const punctuationsRegex = /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g;

export class StringManipulator implements ApeType {
  private shouldRandomizeContent = false;
  private randomLength = -1;
  private minRandomLength = 1;
  private length: number | null = null;
  private shouldRandomizeSequence: boolean = false;
  private shouldRemovePunctuations: boolean = false;
  private shouldUseStaticLength: boolean = false;

  private stringAsArray: string[] = [];

  constructor(private baseString: string) {
    this.stringAsArray = baseString.split(' ');
    this.length = this.stringAsArray.length;
  }

  randomizeLength(length: number = this.baseString.length) {
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

  staticLength(length: number) {
    this.length = length;
    this.shouldUseStaticLength = true;
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

  private applyPunctuationPolicy(str: string) {
    return (this.shouldRemovePunctuations
      ? str.replace(punctuationsRegex, '')
      : str
    );
  }

  private getResultLength() {
    let length = Math.min(this.length as number, this.stringAsArray.length);
    const randomLength = this.shouldUseStaticLength ? length : Math.min(this.randomLength + 1, length);

    if (randomLength > 0) {
      const minRandomLength = Math.max(1, Math.min(this.minRandomLength, randomLength - 1));
      length = Math.floor(Math.random() * (randomLength - minRandomLength)) + minRandomLength;
    }

    return length;
  }

  private getFinalString(stringAsArray: string[]) {
    const result = [...stringAsArray];
    if (this.shouldRandomizeContent) {
      return this.applyPunctuationPolicy(this.randomizeStringArrayOrder(result).join(' '));
    }

    return this.applyPunctuationPolicy(result.join(' '));
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