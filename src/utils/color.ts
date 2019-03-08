export const randomColor = (): string => {
  const hexBase = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexBase.length);
    color += hexBase.charAt(index);
  }

  return color;
};

export const hexToRGB = (hex: string) => {
  const noHash = hex.replace('#', '');
  const r = parseInt(noHash.substring(0, 2), 16);
  const g = parseInt(noHash.substring(2, 4), 16);
  const b = parseInt(noHash.substring(4, 6), 16);
  return [r, g, b];
}

export const getRGBString = (hex: string, alpha: number = -1) => {
  let RGBResult: number[];
  let RGBString = 'rgb';
  if (alpha >= 0) {
    RGBResult = [...hexToRGB(hex), alpha];
    RGBString = 'rgba';
  } else {
    RGBResult = [...hexToRGB(hex)];
  }

  return `${RGBString}(${RGBResult})`;
};