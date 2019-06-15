# Ape

The Ape API is how I thought a data-mocker API should look like. I needed it to create similar chunks of raw data for projects and tests, and thought it could be a good idea to share it with the rest of the world. I believe that the API I proposed here makes it simple and easy to create complex template-based JSON objects.

## Why Ape?
Because apes like to mimic (or "mock") real human behavior... ;)

## Usage
Use the Ape function to generate a new mock object. Ape receives a template object that is consisted of string keys and primitive or Ape operators as values:

```javascript
import Ape, { name, age } from 'ape';

const template = Ape({
  firstName: name().male(),
  lastName: name().lastName(),
  age: age().adult(),
});

// call the generate method to create a new object out of the template above
template.generate();
```

---

### Ape
This is the template builder. It can receive an object or an array and returns a template object.

| Method   | Arguments | Description                                                             |
| -------- | --------- | ----------------------------------------------------------------------- |
| generate | None      | Creates an object with mock data, based on the template supplied to Ape |

### name
Generate random names. The name value can be mutated with the following methods:

| Method         | Arguments | Description                                                              |
| -------------- | --------- | ------------------------------------------------------------------------ |
| male           | None      | Set the first name to be male                                            |
| female         | None      | Set the first name to be female                                          |
| noFirstName    | None      | Don't generate a first name                                              |
| middleName     | None      | Generate a middle name                                                   |
| abbrMiddleName | None      | Generate an abbreviated middle name (W. instead of William)              |
| lastName       | None      | Generate a last name                                                     |
| lastNameFirst  | None      | Place the last name first in this format: lastName, firstName middleName |

*If not specified, the gender will be random*

```javascript
name().female().middleName().abbrMiddleName().lastNameFirst()
// will generate a female name such as Cooper, Whitney E.
```

### age
Generate a random age. Mutation methods:

| Method   | Arguments | Description                         |
| -------- | --------- | ----------------------------------- |
| baby     | None      | Generates an age between 0 and 4    |
| child    | None      | Generates an age between 4 and 14   |
| teenager | None      | Generates an age between 14 and 20  |
| adult    | None      | Generates an age between 20 and 67  |
| senior   | None      | Generates an age between 67 and 120 |
| setMin   | Number    | Sets the minimum age                |
| setMax   | Number    | Sets the maximum age                |

*If not specified, a random age between 0 and 120 will be generated*

```javascript
age().teenager()
// will generate an age between 14 and 20
```

### loremIpsum
Generate a string extract from a lorem ipsum paragraph. Mutation methods:

| Method          | Arguments | Description                                                       |
| --------------- | --------- | ----------------------------------------------------------------- |
| randomizeLength | Number    | Get a random number of words between 1 and the paragraph's length |
| minLength       | Number    | Set the minimum length of the randomLength method                 |
| maxLength       | Number    | Set the maximum length of the randomLength method                 |
| randomizeOrder  | None      | Randomize the order of the result lorem ipsum string              |
| randomSequence  | None      | Randomize the lorem ipsum paragraph *before* exctracting the text |

```javascript
loremIpsum().maxLength(5)
// result: Lorem ipsum dolor sit amet,
```

### image
Generate a placeholder image (a link to a real image). Mutation methods:

| Method   | Arguments | Description                                                  |
| -------- | --------- | ------------------------------------------------------------ |
| width    | Number    | Image width                                                  |
| height   | Number    | Image height                                                 |
| specific | String    | If not specified, a random image will be generated each time |

*If not specified, the default width and height are 420x320*

```javascript
image().width(100).height(50);
```
![alt result](https://imgplaceholder.com/100x50?text=12345)

### fromValues
Takes an array of values. The output will be a random value from the array.

```javascript
fromValues(['Manager', 'Developer', 'IT', 'QA'])
```

### color
Generate a color. Mutation methods:

| Method     | Arguments | Description                                                           |
| ---------- | --------- | --------------------------------------------------------------------- |
| specific   | String    | Returns only the specified color. Requires a hex-formatted color      |
| asRGB      | None      | The value will be in RGB format                                       |
| removeHash | None      | If the result is in hexadecimal, the # symbol will be removed from it |
| setAlpha   | Number    | Set an alpha channel. This will automatically set the format to RGB   |

```javascript
color().setAlpha(0.5)
// rgb(r, g, b, a)
```

### date
Generates a date. Mutation methods:

| Method          | Arguments | Description                                         |
| --------------- | --------- | --------------------------------------------------- |
| random          | None      | Generates a random date between Jan 1, 1970 and now |
| startMinutesAgo | Number    | Sets the minimum date to x minutes ago              |
| startDaysAgo    | Number    | Sets the minimum date to x days ago                 |
| startYearsAgo   | Number    | Sets the minimum date to x years ago                |
| endMinutesAgo   | Number    | Sets the maximum date to x minutes ago              |
| endDaysAgo      | Number    | Sets the maximum date to x days ago                 |
| endYearsAgo     | Number    | Sets the maximum date to x years ago                |
| startAt         | Date      | Sets the start time                                 |
| endAt           | Date      | Sets the end time                                   |

```javascript
date().random().startYearsAgo(30)
// a date between 30 years ago and now
```

### arrayOf
Generate an array of a specific value. The value can also be an Ape object (see example). Mutation methods:

| Method | Arguments       | Description                                                                                                                          |
| ------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| repeat | Number          | The number of times the supplied object will be cloned                                                                               |
| random | Number, Number? | Clone the supplied object x number of times. The second argument is the minimum number of clones, which defaults to 1 if not passed. |

```javascript
Ape({
  blogPosts: arrayOf({
    title: loremIpsum().minLength(5).randomizeLength(10).randomizeOrder(),
    thumbnail: image(),
    publishDate: date().startYearsAgo(5).random()
  })
}.random(10, 3))

// an array of 3-10 blogPost items 
```

### email
Generate an email address:

| Method      | Arguments | Description                                                                   |
| ----------- | --------- | ----------------------------------------------------------------------------- |
| gmail       | None      | Set gmail as the email provider                                               |
| outlook     | None      | Set outlook as the email provider                                             |
| icloud      | None      | Set icloud as the email provider                                              |
| yahoo       | None      | Set yahoo as the email provider                                               |
| aol         | None      | Set aol as the email provider                                                 |
| setProvider | String    | Set your own email provider                                                   |
| setUser     | String    | Set the email's user                                                          |
| male        | None      | Use a random male user                                                        |
| female      | None      | Use a random female user                                                      |
| useDot      | None      | Will format the email address with a dot in the user field (test.t@gmail.com) |
| useEmail    | None      | Use a static email address                                                    |

*If no user was provided, a random one will be selected*
*setEmail and setProvider do not validate the data they receive* 

```javascript
email: email().gmail().male().useDot()
// will generate a random email like this: clarence.stanley@gmail.com
```