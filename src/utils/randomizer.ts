import { Gender } from '../data/genders';
import { Protocol } from '../data/protocols';
import { firstNames } from '../data/firstNameLists';
import { lastNames } from '../data/lastNameList';
import { middleNames } from '../data/middleNameList';
import { domain } from '../data/domains';

interface NamesList {
  male?: string[],
  female?: string[],
  [key: string]: any
}

export const randomValueFromArray = (array: any[]) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

export const randRange = (start: number, end: number) => Math.floor(Math.random() * (end - start)) + start;

export const randomGender = (): Gender => Math.floor(Math.random() * 2) === 0 ? 'Male' : 'Female';

const randomName = (nameList: NamesList, gender: Gender, abbr: boolean = false): string => {
  const lowerCasedGender = (gender === 'random' ? randomGender() : gender).toLowerCase();
  const names: string[] = lowerCasedGender in nameList ? nameList[lowerCasedGender] : nameList;
  const index = Math.floor(Math.random() * names.length);
  return abbr ? names[index].charAt(0) + '.' : names[index];
}

export const randomFirstName = (gender: Gender, abbr: boolean = false) => randomName(firstNames, gender, abbr);

export const randomMiddleName = (gender: Gender, abbr: boolean = false) => randomName(middleNames, gender, abbr);

export const randomLastName = (abbr: boolean = false) => randomName(lastNames, 'random', abbr);

export const randomDomain = () => {
  const base = randomFirstName('random');
  const prefix = Math.random() > 0.5 ? 'www' : randomValueFromArray(domain.prefixes);
  const suffix = Math.random() > 0.5 ? 'com' : randomValueFromArray(domain.suffixes);

  return [prefix, base, suffix].join('.');
};

export const randomUrlPath = () => {
  const length = randRange(1, 3);
  return Array.from(new Array(length)).map(() => randomFirstName('random').toLowerCase());
};

export const randomProtocol = () => {
  const protocols: Protocol[] = ['http://', 'https://'];
  const index = Math.floor(Math.random() * protocols.length);
  return protocols[index];
};
