const { classrooms } = require('../datasets/classrooms');

const classPrompts = {
  // Create an array of just the front-end classrooms.
  // ex: [
  //   { roomLetter: 'A', program: 'FE', capacity: 32 },
  //   { roomLetter: 'C', program: 'FE', capacity: 27 },
  //   { roomLetter: 'E', program: 'FE', capacity: 22 },
  //   { roomLetter: 'G', program: 'FE', capacity: 29 }
  // ]
  feClassrooms() {
    return classrooms.filter(classroom => classroom.program === 'FE');
  },

  // Create an object where the keys are 'feCapacity' and 'beCapacity', and the values are the total capacity for all classrooms in each program.
  // ex: {
  //   feCapacity: 110,
  //   beCapacity: 96
  // }
  totalCapacities() {
    let feCount = 0;
    let beCount = 0;

    return classrooms.reduce((list, classroom) => {
      if (classroom.program === 'FE') {
        feCount += classroom.capacity;
      }
      if (classroom.program === 'BE') {
        beCount += classroom.capacity;
      }

      list.feCapacity = feCount;
      list.beCapacity = beCount;

      return list;
    }, {});

    // try and refactor for less code? current code is very clear and readable though
  },

  // Return the array of classrooms sorted by their capacity (least capacity to greatest).
  sortByCapacity() {
    return classrooms.sort((first, last) => {
      return first.capacity - last.capacity;
    });
  }
};

module.exports = classPrompts;
