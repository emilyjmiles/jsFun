const chai = require("chai");
const expect = chai.expect;

const { clubs } = require('../datasets/clubs');
const clubPrompts = require('../codeFiles/clubs-code');

describe("Club Prompts", () => {
  it("should return a list of people that are in a clubs with a list of all clubs that person is a part of", () => {
    const e = clubPrompts.membersBelongingToClubs(clubs);

    expect(e).to.deep.equal({
      Louisa: ['Drama', 'Art'],
      Pam: ['Drama', 'Chess', 'Newspaper'],
      Nathaniel: ['Drama', 'Astronomy'],
      Leta: ['Band', 'Newspaper', 'Astronomy'],
      Robbie: ['Band', 'Chess', 'FBLA'],
      Jhun: ['Band', 'Art'],
      Will: ['Band'],
      David: ['Chess', 'Newspaper', 'FBLA'],
      Brittany: ['Chess', 'Newspaper'],
      Christie: ['Newspaper', 'FBLA']
    });
  });
});
