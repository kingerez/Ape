import { ApeType } from './ApeType';

export type ApePattern = any[] | {};

const instanceofApeType = (object: any): object is ApeType => {
  return 'generate' in object;
}

export const apeGenerator = (pattern: ApePattern) => {
  if (typeof pattern !== 'object') return pattern;

  if (instanceofApeType(pattern)) {
    return pattern.generate();
  }

  const resultObject = pattern instanceof Array ? [] : {};
  Object.entries(pattern).forEach(entry => {
    const [key, value] = entry;
    resultObject[key] = apeGenerator(value);
  });

  return resultObject;
};