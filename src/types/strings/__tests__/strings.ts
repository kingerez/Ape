import { StringManipulator, punctuationsRegex } from '../StringManipulator';
import { LOREM_IPSUM, loremIpsum } from '../loremIpsum';

describe('string manipulator', () => {
  const borgQuote = 'We are the Borg. Your biological and technological distinctiveness will be added to our own. Resistance is futile.';

  it('should generate a string', () => {
    const manipulator = new StringManipulator(borgQuote);
    expect(manipulator.generate()).toEqual(borgQuote);
  });

  it('should generate a string of random length', () => {
    const manipulator = new StringManipulator(borgQuote);
    const strings = [];
    for (let i = 0; i < 100; i++) {
      strings.push(manipulator.randomizeLength(5).generate());
    }

    expect(strings.every(string => string.split(' ').length <= 5)).toBeTruthy();
  });

  it('should randomize the words order using randomizeOrder', () => {
    const manipulator = new StringManipulator(borgQuote);
    expect(manipulator.randomizeOrder().generate()).not.toEqual(borgQuote); // Yes, I know this may fail on occasion
  });

  it('should randomize the words order using randomizeSequence', () => {
    const manipulator = new StringManipulator(borgQuote);
    expect(manipulator.randomSequence().generate()).not.toEqual(borgQuote); // Yes, I know this may fail on occasion
  });

  it('should properly remove punctuation marks', () => {
    const manipulator = new StringManipulator(borgQuote);
    const match = manipulator.noPunctuation().generate().match(punctuationsRegex);
    if (match) {
      expect(match.every(s => s === '')).toBeTruthy();
    }
  });
});

describe('lorem ipsum', () => {
  it('should generate a lorem ipsum string', () => {
    const lorem = loremIpsum();
    expect(lorem.generate()).toEqual(LOREM_IPSUM);
  });
});
