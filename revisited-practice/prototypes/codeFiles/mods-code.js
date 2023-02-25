const { mods } = require('../datasets/mods');

const modPrompts = {
  // Return an array of objects where the keys are mod (the number of the module) and studentsPerInstructor (how many students per instructor there are for that mod).
  // ex: [
  //   { mod: 1, studentsPerInstructor: 9 },
  //   { mod: 2, studentsPerInstructor: 11 },
  //   { mod: 3, studentsPerInstructor: 10 },
  //   { mod: 4, studentsPerInstructor: 8 }
  // ]
  studentsPerMod() {
    return mods.map(mod => ({
      mod: mod.mod,
      studentsPerInstructor: mod.students / mod.instructors,
    }));
  }
};

module.exports = modPrompts;
