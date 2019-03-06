import { ApeType } from './ApeType';
import { ApePattern, apeGenerator } from './apeGenerator';

export class ApeBuilder implements ApeType {
  constructor(private mockPattern: ApePattern) { }

  generate() {
    return apeGenerator(this.mockPattern);
  }
};

export const Ape = (mockPattern: ApePattern): ApeBuilder => new ApeBuilder(mockPattern);