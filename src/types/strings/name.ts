import { randomFirstName, randomMiddleName, randomLastName } from '../../utils/randomizer';
import { Gender } from '../../data/genders';
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
    this.useFirstName && finalName.push(randomFirstName(this.gender, false));
    this.useMiddleName && finalName.push(randomMiddleName(this.gender, this.useAbbrMiddleName));

    if (this.useLastName) {
      const shouldAddComma = this.useLastNameFirst && this.useFirstName || this.useMiddleName;
      let lastName = randomLastName(false) + (shouldAddComma ? ',' : '');
      finalName[this.useLastNameFirst ? 'unshift' : 'push'](lastName);
    }

    return finalName.join(' ');
  }
}

export const name = () => new NameGenerator();