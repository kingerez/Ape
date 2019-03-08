import { ApeType } from '../../ApeType';

class ApeImage implements ApeType {
  private baseSrc: string = 'https://imgplaceholder.com';
  private imgWidth: number = 420;
  private imgHeight: number = 320;
  private id: string = '0';
  private random: boolean = true;

  width(width: number) {
    this.imgWidth = width;
    return this;
  }

  height(height: number) {
    this.imgHeight = height;
    return this;
  }

  specific(id: string) {
    this.id = id;
    this.random = false;
    return this;
  }

  generate() {
    const id = this.random ? Math.round(Math.random() * 1000000) : this.id;
    return `${this.baseSrc}/${this.imgWidth}x${this.imgHeight}?text=${id}`;
  }
}

export const image = () => new ApeImage();