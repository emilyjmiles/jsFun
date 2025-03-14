# Understanding Prototype Methods

Understanding how to use prototype methods is an important step in learning how to work with application data. As you build more complex applications, you'll find yourself working with very large datasets. These datasets might need to be reconfigured into new formats or connected to other sources of data. Prototype methods will give you the tools to accomplish these tasks.

In order to be successful when working with prototype methods, you'll need to have a solid understanding of the following concepts:

- dot vs. bracket notation - when, why, and how to use each
- mutator vs. accessor vs. iterator methods
- the main characteristics of each prototype method:
  - what it does
  - what arguments it takes in
  - what it returns

# Instructions

In the [prototypes/codeFiles](https://github.com/emilyjmiles/jsFun/tree/main/revisited-practice/prototypes/codeFiles) directory, you'll find several files named after the dataset they will be utilizing. Each file contains prompts for how to manipulate the data to pass the tests in the corresponding test file.

For example, the `kitty-puppers-code.js` file uses both `prototypes/datasets/kitties.js` and `prototypes/datasets/puppers.js`. As you work through the methods in this file, it will help to switch your text editor layout to display 2 files at once - one for the dataset you're currently working with, and one for the prompts to be solved.

Each prompt has an explanation of what needs to be accomplished with each method and what the final output should look like.

For example, given the following dataset and prompt:

```js
// dataset/farm.js

const animals = [
  { name: "cow", sound: "moo", count: 30 },
  { name: "chicken", sound: "cluck", count: 10 },
  { name: "sheep", sound: "baah", count: 20 },
];

module.exports = {
  animals,
};

// prototypes/index.js
const { animals } = require("./datasets/farm");

const farmPrompts = {
  totalFarmAnimals() {
    // Return a single number that represents the
    // total amount of animals on the farm. e.g.
    // 50
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};
```

Your solution should look something like the following:

```js
// prototypes/index.js
const { animals } = require("./datasets/farm");

const farmPrompts = {
  totalFarmAnimals() {
    // Return a single number that represents the
    // total amount of animals on the farm. e.g.
    // 50

    const totalAnimals = animals.reduce((total, animal) => {
      return (total += animal.count);
    }, 0);

    return totalAnimals;

    // Annotation:
    // Because we are given an array, and want a single number back,
    // we will reach for the `reduce` method since it is the only one
    // that allows us to return a value of any data type. On each iteration
    // of reduce, we will add our current animal's `count` value to the
    // accumulator which will be returned when the iteration is complete.
  },
};
```

You will then check that your solution is correct by running the corresponding test file in [prototypes/test](https://github.com/emilyjmiles/jsFun/tree/main/revisited-practice/prototypes/test) directory.

## Prototype Test Checklist

If you'd like to keep track of your progress, feel free to use the checklist below. Change the `[ ]` to `[x]` in order to check off each item.

### Single Data Sets

- [x] kitties
- [x] puppers
- [x] club
- [x] mods
- [x] cakes
- [x] classrooms
- [x] books
- [x] weather
- [x] nationalParks
- [x] breweries
- [x] boardgames

### Double Data Sets

- [x] turing (instructors, cohorts)
- [x] bosses (bosses, sidekicks)
- [x] astronomy (constellations, stars)
- [x] ultima (weapons, characters)

### Triple Data Sets

- [x] dinosaurs (dinosaurs, humans, movies)

# More Practice

For more practice with iterators (in an assessment-style format), check out [this gist](https://gist.github.com/kaylagordon/c1f62f2c43e27dee3c6176f4d54aa3b6)!

# Resources

- [MDN - Array Prototype Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods)
- [MDN - Object Prototype Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor)
- [Turing Prototype Methods Lesson Plan](http://frontend.turing.io/lessons/module-2/arrays-objects/index.html)
