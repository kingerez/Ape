import { ApeType } from '../../ApeType';
import { randomColor, hexToRGB } from '../../utils/color';

class Color implements ApeType {
  private color: string;
  private randomColor: boolean = true;
  private useRGB: boolean = false;
  private useHash: boolean = true;

  specific(hex: string) {
    this.color = hex;
    this.randomColor = false;
    return this;
  }

  asRGB() {
    this.useRGB = true;
    return this;
  }

  removeHash() {
    this.useHash = false;
    return this;
  }

  generate() {
    const color = this.randomColor ? randomColor() : this.color;
    const hash = this.useHash ? '#' : '';
    return this.useRGB ? hexToRGB(color) : hash + color;
  }
}

export const color = () => new Color();