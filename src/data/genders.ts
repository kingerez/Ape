// Using two genders only for data generation purposes. We love and accept everyone, regardless of definitions.

export type Gender = 'Male' | 'Female' | 'random';

export const randomGender = (): Gender => {
  return Math.floor(Math.random() * 2) === 0 ? 'Male' : 'Female';
};
