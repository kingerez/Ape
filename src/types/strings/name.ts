import { firstNames } from '../../data/firstNameLists';
import { lastNames } from '../../data/lastNameList';
import { middleNames } from '../../data/middleNameList';
import { Gender, randomGender } from '../../data/genders';
import { ApeType } from '../../ApeType';

interface NamesList {
  male?: string[],
  female?: string[],
  [key: string]: any
}

class NameGenerator implements ApeType {
  private useFirstName: boolean = true;
  private useLastName: boolean = false;
  private useLastNameFirst: boolean = false;
  private useMiddleName: boolean = false;
  private useAbbrMiddleName: boolean = false;
  private gender: Gender = 'random';

  private generateRandomName(nameList: NamesList, gender: Gender, abbr: boolean = false): string {
    const lowerCasedGender = gender.toLowerCase();
    const names: string[] = lowerCasedGender in nameList ? nameList[lowerCasedGender] : nameList;
    const index = Math.floor(Math.random() * names.length);
    return abbr ? names[index].charAt(0) + '.' : names[index];
  }

  male() {
    this.gender = 'Male';
    return this;
  }

  female() {
    this.gender = 'Female';
    return this;
  }

  noFirstName() {
    this.useFirstName = false;
    return this;
  }

  middleName() {
    this.useMiddleName = true;
    return this;
  }

  abbrMiddleName() {
    this.useMiddleName = true;
    this.useAbbrMiddleName = true;
    return this;
  }

  lastName() {
    this.useLastName = true;
    this.useLastNameFirst = false;
    return this;
  }

  lastNameFirst() {
    this.useLastName = true;
    this.useLastNameFirst = true;
    return this;
  }

  generate() {
    const finalName = [];
    const gender = this.gender === 'random' ? randomGender() : this.gender;
    this.useFirstName && finalName.push(this.generateRandomName(firstNames, gender));
    this.useMiddleName && finalName.push(this.generateRandomName(middleNames, gender, this.useAbbrMiddleName));

    if (this.useLastName) {
      const shouldAddComma = this.useLastNameFirst && this.useFirstName || this.useMiddleName;
      let lastName = this.generateRandomName(lastNames, gender) + (shouldAddComma ? ',' : '');
      finalName[this.useLastNameFirst ? 'unshift' : 'push'](lastName);
    }

    return finalName.join(' ');
  }
}

export const name = () => new NameGenerator();