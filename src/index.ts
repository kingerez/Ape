import * as apes from './types';
import { Ape } from './ApeBuilder';

const test = Ape({
  fullName: apes.name().male().middleName().lastName(),
  profileImage: apes.image().width(170).height(170),
  age: apes.age().adult(),
  position: apes.fromValues(['Manager', 'Developer', 'IT', 'QA']),
  blogPosts: Ape(apes.arrayOf({
    title: apes.loremIpsum().minLength(5).randomizeLength(10).randomizeOrder(),
    textColor: apes.color(),
    thumbnail: apes.image(),
    publishDate: apes.date().startYearsAgo(5).random(),
    content: apes.loremIpsum().randomizeOrder(),
  }).repeat(5)),
});

console.log('--------------------------------');

console.log(test.generate());

console.log(Ape(apes.name().male()).generate());