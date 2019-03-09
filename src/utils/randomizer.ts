import { Gender } from '../data/genders';
import { firstNames } from '../data/firstNameLists';
import { lastNames } from '../data/lastNameList';
import { middleNames } from '../data/middleNameList';

interface NamesList {
  male?: string[],
  female?: string[],
  [key: string]: any
}

export const randRange = (start: number, end: number) => {
  return Math.floor(Math.random() * (end - start)) + start;
};

export const randomGender = (): Gender => {
  return Math.floor(Math.random() * 2) === 0 ? 'Male' : 'Female';
};

const generateRandomName = (nameList: NamesList, gender: Gender, abbr: boolean = false): string => {
  const lowerCasedGender = (gender === 'random' ? randomGender() : gender).toLowerCase();
  const names: string[] = lowerCasedGender in nameList ? nameList[lowerCasedGender] : nameList;
  const index = Math.floor(Math.random() * names.length);
  return abbr ? names[index].charAt(0) + '.' : names[index];
}

export const randomFirstName = (gender: Gender, abbr: boolean = false) => generateRandomName(firstNames, gender, abbr);

export const randomMiddleName = (gender: Gender, abbr: boolean = false) => generateRandomName(middleNames, gender, abbr);

export const randomLastName = (abbr: boolean = false) => generateRandomName(lastNames, 'random', abbr);
