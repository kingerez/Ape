export {
  loremIpsum,
  name,
  age,
  image,
  fromValues,
  color,
  date,
  arrayOf,
} from './types';
export { Ape } from './ApeBuilder';

// const test = Ape({
//   fullName: apes.name().male().middleName().lastName(),
//   profileImage: apes.image().width(170).height(170),
//   age: apes.age().adult(),
//   position: apes.fromValues(['Manager', 'Developer', 'IT', 'QA']),
//   blogPosts: Ape(apes.arrayOf({
//     title: apes.loremIpsum().minLength(5).randomizeLength(10).randomizeOrder(),
//     textColor: apes.color().setAlpha(0.5),
//     thumbnail: apes.image(),
//     publishDate: apes.date().startYearsAgo(5).random(),
//     content: apes.loremIpsum().randomizeOrder(),
//     tags: apes.arrayOf(apes.loremIpsum().maxLength(1).randomSequence()).repeat(3),
//   }).repeat(5)),
// });

// console.log('---------------- TESTING ----------------');

// console.log(test.generate().blogPosts[0].tags);

// // console.log(Ape(apes.name().male()).generate());
