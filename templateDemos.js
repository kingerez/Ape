console.log(require('./dist/index'));

// const test = Ape({
//   firstName: name().male().lastName(),
//   fullName: name().male().middleName().lastName(),
//   profileImage: image().width(170).height(170),
//   age: age().adult(),
//   position: fromValues(['Manager', 'Developer', 'IT', 'QA']),
//   blogPosts: Ape(arrayOf({
//     title: loremIpsum().minLength(5).randomizeLength(10).randomizeOrder(),
//     textColor: color().setAlpha(0.5),
//     thumbnail: image(),
//     publishDate: date().startYearsAgo(5).random(),
//     content: loremIpsum().randomizeOrder(),
//     tags: arrayOf(loremIpsum().maxLength(1).randomSequence()).repeat(3),
//   }).repeat(5)),
// });

// console.log('---------------- TESTING ----------------');

// console.log(test.generate().blogPosts[0].tags);

// // console.log(Ape(name().male()).generate());
