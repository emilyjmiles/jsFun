const { kitties } = require('../datasets/kitties');
const { puppers } = require('../datasets/puppers');

const kittyPrompts = {
  // Return an array of just the names of kitties who are orange.
  // ex: ['Tiger', 'Snickers']
  orangePetNames(animalList) {
    return animalList.reduce((list, animal) => {
      if (animal.color === 'orange') {
        list.push(animal.name);
      }

      return list;
    }, []);
  },

  // Sort the kitties by their age.
  sortByAge(animalList) {
    return animalList.sort((first, last) => {
      return last.age - first.age;
    });
  },

  // Return an array of kitties who have all grown up by 2 years.
  // ex: [
  //  { name: 'Felicia', age: 4, color: 'grey' },
  //  { name: 'Tiger', age: 7, color: 'orange' }, 
  //  ...etc
  // ]
  growUp(animalList) {
    animalList.forEach(animal => animal.age += 2);

    return animalList;
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.

module.exports = kittyPrompts;