const { instructors, cohorts } = require('../datasets/turing');

const turingPrompts = {
  // Return an array of instructors where each instructor is an object with a name and the count of students in their module.
  // ex: [
  //  { name: 'Pam', studentCount: 21 },
  //  { name: 'Robbie', studentCount: 18 }
  // ]
  studentsForEachInstructor() {
    return instructors.reduce((list, instructor) => {
      cohorts.forEach(cohort => {
        if (instructor.module === cohort.module) {
          list.push({
            name: instructor.name,
            studentCount: cohort.studentCount
          });
        }
      });

      return list;
    }, []);
  },

  // Return an object of how many students per teacher there are in each cohort.
  // ex: {
  // cohort1806: 9,
  // cohort1804: 10.5
  // }
  studentsPerInstructor() {
    return cohorts.reduce((list, cohort) => {
      const filter = instructors.filter(instructor => (
        instructor.module === cohort.module
      ));

      list[`cohort${cohort.cohort}`] = cohort.studentCount / filter.length;

      return list;
    }, {});
  },

  // Return an object where each key is an instructor name and each value is an array of the modules they can teach based on their skills.
  // ex: {
  //     Pam: [2, 4],
  //     Brittany: [2, 4],
  //     Nathaniel: [2, 4],
  //     Robbie: [4],
  //     Leta: [2, 4],
  //     Travis: [1, 2, 3, 4],
  //     Louisa: [1, 2, 3, 4],
  //     Christie: [1, 2, 3, 4],
  //     Will: [1, 2, 3, 4]
  //   }
  modulesPerTeacher() {
    return instructors.reduce((list, instructor) => {
      list[instructor.name] = [];

      cohorts.forEach(cohort => {
        instructor.teaches.forEach(subject => {
          if (!list[instructor.name].includes(cohort.module) && cohort.curriculum.includes(subject)) {
            list[instructor.name].push(cohort.module);
          }
        });
      });

      return list;
    }, {});
  },

  // Return an object where each key is a curriculum topic and each value is an array of instructors who teach that topic.
  // ex: {
  //   html: [ 'Travis', 'Louisa' ],
  //   css: [ 'Travis', 'Louisa' ],
  //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
  //   recursion: [ 'Pam', 'Leta' ]
  // }
  curriculumPerTeacher() {
    return cohorts.reduce((list, cohort) => {
      cohort.curriculum.forEach(subject => {
        instructors.forEach(instructor => {
          if (!list[subject]) {
            list[subject] = [];
          }
          if (instructor.teaches.includes(subject) && !list[subject].includes(instructor.name)) {
            list[subject].push(instructor.name);
          }
        });
      });

      return list;
    }, {});
  }
};

module.exports = turingPrompts;
