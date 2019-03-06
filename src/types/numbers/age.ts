import { ApeType } from '../../ApeType';
import { NumberManipulator } from './NumberManipulator';

class Age extends NumberManipulator implements ApeType {
  constructor() {
    super();
    this.setMax(120);
  }

  baby() {
    this.setMax(4);
    return this;
  }

  child() {
    this.setMin(4);
    this.setMax(14);
    return this;
  }

  teenager() {
    this.setMin(14);
    this.setMax(20);
    return this;
  }

  adult() {
    this.setMin(20);
    this.setMax(67);
    return this;
  }

  senior() {
    this.setMin(67);
    this.setMax(120);
    return this;
  }
}

export const age = () => new Age();