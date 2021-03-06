import { ApeType } from '../../ApeType';
import { randomColor, getRGBString } from '../../utils/color';

class Color implements ApeType {
  private color: string = 'ffffff';
  private randomColor: boolean = true;
  private useRGB: boolean = false;
  private useHash: boolean = true;
  private useAlpha: boolean = false;
  private alpha: number = 1;

  specific(hex: string) {
    this.color = hex.replace('#', '');
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

  setAlpha(alpha: number = 1) {
    this.useAlpha = true;
    this.alpha = alpha;
    return this;
  }

  generate() {
    const color = this.randomColor ? randomColor() : this.color;
    const hash = this.useHash ? '#' : '';
    const alpha = this.useAlpha ? this.alpha : -1;
    return (this.useRGB || this.useAlpha) ? getRGBString(color, alpha) : hash + color;
  }
}

export const color = () => new Color();