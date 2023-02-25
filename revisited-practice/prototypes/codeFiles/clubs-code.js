const { clubs } = require('../datasets/clubs');

const clubPrompts = {
  // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file).
  // Create an object whose keys are the names of people, and whose values are arrays that include the names of the clubs that person is a part of.
  // ex: {
  //   Louisa: ['Drama', 'Art'],
  //   Pam: ['Drama', 'Art', 'Chess'],
  //   ...etc
  // }
  membersBelongingToClubs() {
    return clubs.reduce((list, club) => {
      club.members.forEach(member => {
        if (!list[member]) {
          list[member] = [];
        }
        if (!list[member].includes(club.club)) {
          // this conditional statement is not necessary but used for preventative error handling
          list[member].push(club.club);
        }
      });

      return list;
    }, {});
  }
};

module.exports = clubPrompts

