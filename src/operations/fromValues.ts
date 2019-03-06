import { ApeType } from '../ApeType';

class FromValues implements ApeType {
  constructor(private values: any[]) { }

  generate() {
    const index = Math.floor(Math.random() * this.values.length);
    return this.values[index];
  }
}

export const fromValues = (values: any[]) => new FromValues(values);