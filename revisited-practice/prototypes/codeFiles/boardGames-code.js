const { boardGames } = require('../datasets/boardGames');

const boardGamePrompts = {
  // Return an array of just the names of the games within a specified type. 
  // ex: given "strategy", returns
  // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]
  listGames(genre) {
    return boardGames[genre].map(game => game.name);
  },

  // Return an array of just the names of the games within a specified type, sorted alphabetically. 
  // ex: given an argument of "childrens", returns
  // ["Candy Land", "Connect Four", "Operation", "Trouble"]
  listGamesAlphabetically(genre) {
    return this.listGames(genre).sort();
  },

  // Return an object which is the highest rated game within the specified type.
  // ex: given the argument of 'party', returns
  // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },
  findHighestRatedGamesByType(genre) {
    return boardGames[genre].sort((first, last) => {
      return last.rating - first.rating;
    })[0];
  },

  // Return the average score for the specified type.
  // ex: given the argument of "strategy", returns 7
  // note: do not worry about rounding your result.
  averageScoreByType(genre) {
    return boardGames[genre].reduce((average, game) => {
      average += game.rating / boardGames[genre].length;

      return average;
    }, 0);
  },

  // Return the average score of any games that match the specified type and maximum number of players.
  // ex: given the arguments of "strategy" and 2, return 6.16666666667
  // note: do not worry about rounding your result.
  averageScoreByTypeAndPlayers(genre, maximum) {
    const filteredGames = boardGames[genre].filter(game => (
      game.maxPlayers === maximum
    ));

    return filteredGames.reduce((average, game) => {
      average += game.rating / filteredGames.length;

      return average;
    }, 0);
  }
};

module.exports = boardGamePrompts;