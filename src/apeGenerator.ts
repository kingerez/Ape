import { ApeType } from './ApeType';

export type ApePattern = { [key: string]: any };

const instanceofApeType = (object: any): object is ApeType => {
  return 'generate' in object;
}

export const apeGenerator = (pattern: ApePattern) => {
  if (typeof pattern !== 'object') return pattern;

  if (instanceofApeType(pattern)) {
    return pattern.generate();
  }

  const resultObject: ApePattern = pattern instanceof Array ? [] : {};
  Object.keys(pattern).forEach(key => {
    const value: any = pattern[key];
    resultObject[key] = apeGenerator(value);
  });

  return resultObject;
};