import { ApeType } from '../../ApeType';
import { randRange } from '../../utils/randomizer';

export class NumberManipulator implements ApeType {
  private min: number = 0;
  private max: number = 1;

  setMin(min: number) {
    this.min = min;
    return this;
  }

  setMax(max: number) {
    this.max = max;
    return this;
  }

  generate() {
    return randRange(this.min, this.max);
  }
}