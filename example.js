const Ape = require('./lib').default;
const types = require('./lib');

const test = Ape({
  fullName: types.name().male().middleName().lastName(),
  profileImage: types.image().width(170).height(170),
  age: types.age().adult(),
  position: types.fromValues(['Manager', 'Developer', 'IT', 'QA']),
  blogPosts: Ape(types.arrayOf({
    title: types.loremIpsum().minLength(5).randomizeLength(10).randomizeOrder(),
    textColor: types.color().setAlpha(0.5),
    thumbnail: types.image(),
    publishDate: types.date().startYearsAgo(5).random(),
    content: types.loremIpsum().randomizeOrder().noPunctuation(),
    tags: types.arrayOf(types.loremIpsum().maxLength(1).randomSequence()).repeat(3),
  }).repeat(5)),
});

console.log(test.generate());