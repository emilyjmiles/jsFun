const chai = require("chai");
const expect = chai.expect;

const { boardGames } = require('../datasets/boardGames');
const boardGamePrompts = require('../codeFiles/boardGames-code');

describe("Board Game Prompts", () => {
  it.skip("should return a list of game titles for a given game type", () => {
    const strategyGames = boardGamePrompts.listGames('strategy');
    const childrensGames = boardGamePrompts.listGames('childrens');
    const partyGames = boardGamePrompts.listGames('party');

    expect(strategyGames).to.deep.equal(["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket To Ride"]);
    expect(childrensGames).to.deep.equal(["Candy Land", "Connect Four", "Operation", "Trouble"]);
    expect(partyGames).to.deep.equal(["Werewolf", "Cards Against Humanity", "Codenames", "Sushi Go! Party", "Tsuro"]);
  });

  it.skip("should return a list of game titles in alphabetical order for a given game type", () => {
    const strategyGames = boardGamePrompts.listGamesAlphabetically('strategy');
    const childrensGames = boardGamePrompts.listGamesAlphabetically('childrens');
    const partyGames = boardGamePrompts.listGamesAlphabetically('party');

    expect(strategyGames).to.deep.equal(["Azul", "Battle Ship", "Catan", "Checkers", "Chess", "Pandemic", "Ticket To Ride"]);
    expect(childrensGames).to.deep.equal(["Candy Land", "Connect Four", "Operation", "Trouble"]);
    expect(partyGames).to.deep.equal(["Cards Against Humanity", "Codenames", "Sushi Go! Party", "Tsuro", "Werewolf"]);
  });

  it.skip("should return the details for the highest rated game for a given game type", () => {
    const highestStrategy = boardGamePrompts.findHighestRatedGamesByType('strategy');
    const highestChildrens = boardGamePrompts.findHighestRatedGamesByType('childrens');
    const highestParty = boardGamePrompts.findHighestRatedGamesByType('party');

    expect(highestStrategy).to.deep.equal({ name: 'Azul', rating: 8.8, maxPlayers: 4 });
    expect(highestChildrens).to.deep.equal({ name: 'Connect Four', rating: 4.9, maxPlayers: 2 });
    expect(highestParty).to.deep.equal({ name: 'Codenames', rating: 7.4, maxPlayers: 8 });
  });

  it.skip("should return the average rating score for of all games for a given game type", () => {
    const avScoreStrat = boardGamePrompts.averageScoreByType('strategy');
    const avScoreChildren = boardGamePrompts.averageScoreByType('childrens');
    const avScoreParty = boardGamePrompts.averageScoreByType('party');

    expect(Math.round(avScoreStrat * 100) / 100).to.equal(7);
    expect(Math.round(avScoreChildren * 100) / 100).to.equal(4.25);
    expect(Math.round(avScoreParty * 100) / 100).to.equal(6.54);
  });

  it.skip("should return the average rating score for games that match the given game type and maximum players", () => {
    const avScoreStrat = boardGamePrompts.averageScoreByTypeAndPlayers('strategy', 2);
    const avScoreChildren = boardGamePrompts.averageScoreByTypeAndPlayers('childrens', 4);
    const avScoreParty = boardGamePrompts.averageScoreByTypeAndPlayers('party', 8);

    expect(Math.round(avScoreStrat * 100) / 100).to.equal(6.17); // 2 players
    expect(Math.round(avScoreChildren * 100) / 100).to.equal(3.8); // 4 players
    expect(Math.round(avScoreParty * 100) / 100).to.equal(7); // 8 players
  });
});
