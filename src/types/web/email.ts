import { ApeType } from '../../ApeType';
import { Gender } from '../../data/genders';
import { randomFirstName, randomLastName } from '../../utils/randomizer';

const PROVIDERS = {
  GMAIL: 'gmail.com',
  OUTLOOK: 'outlook.com',
  ICLOUD: 'icloud.com',
  YAHOO: 'yahoo.com',
  AOL: 'aol.com',
};

class ApeMail implements ApeType {
  private provider: string = '';
  private user: string = '';
  private gender: Gender = 'random';
  private useDotNotation: boolean = false;

  private getProvider() {
    if (this.provider !== '') return this.provider;
    const providersAsArray = Object.values(PROVIDERS);
    const index = Math.floor(Math.random() * providersAsArray.length);
    return providersAsArray[index];
  }

  private shouldUseLastName() {
    return this.useDotNotation || Math.floor(Math.random() * 2) === 0;
  }

  private getUser() {
    if (this.user !== '') return this.user;
    let name = randomFirstName(this.gender, false);
    if (this.shouldUseLastName()) {
      const lastName = randomLastName(false);
      name = `${name}.${lastName}`;
    }

    return name;
  }

  setProvider(provider: string) {
    this.provider = provider;
    return this;
  }

  setUser(user: string) {
    this.user = user;
    return this;
  }

  male() {
    this.gender = 'Male';
    return this;
  }

  female() {
    this.gender = 'Female';
    return this;
  }

  useDot() {
    this.useDotNotation = true;
    return this;
  }

  // Yes, it's naive.
  setEmail(email: string) {
    const splitEmail = email.split('@');
    this.user = splitEmail[0];
    this.provider = splitEmail[1];
    return this;
  }

  gmail() { return this.setProvider(PROVIDERS.GMAIL) }
  outlook() { return this.setProvider(PROVIDERS.OUTLOOK) }
  icloud() { return this.setProvider(PROVIDERS.ICLOUD) }
  yahoo() { return this.setProvider(PROVIDERS.YAHOO) }
  aol() { return this.setProvider(PROVIDERS.AOL) }

  generate() {
    const provider = this.getProvider();

  }
}

export const email = () => new ApeMail();