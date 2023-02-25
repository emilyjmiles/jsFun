const chai = require("chai");
const expect = chai.expect;

const { puppers } = require('../datasets/puppers');
const { kitties } = require('../datasets/kitties');
const kittyPrompts = require('../codeFiles/kitties-puppers-code');

describe("Kitty Prompts", () => {
  it("should return a list of the names of orange kitties", () => {
    const e = kittyPrompts.orangePetNames(kitties);

    expect(e).to.deep.equal(["Tiger", "Snickers"]);
  });

  it("should sort kitties from oldest to youngest", () => {
    const e = kittyPrompts.sortByAge(kitties);

    expect(e).to.deep.equal([{
      name: "Snickers",
      age: 8,
      color: "orange"
    }, {
      name: "Tiger",
      age: 5,
      color: "orange"
    }, {
      name: "Felicia",
      age: 2,
      color: "grey"
    }, {
      name: "Max",
      age: 1,
      color: "tuxedo"
    }]);
  });

  it("should increase the age of kitties by 2 years", () => {
    const e = kittyPrompts.growUp(kitties);

    expect(e).to.deep.equal([{
      name: "Snickers",
      age: 10,
      color: "orange"
    }, {
      name: "Tiger",
      age: 7,
      color: "orange"
    }, {
      name: "Felicia",
      age: 4,
      color: "grey"
    }, {
      name: "Max",
      age: 3,
      color: "tuxedo"
    }]);
  });

});

describe('Kitty Prompts Dynamic Refactor', () => {
  it('should return a list of the names of orange puppers OR kitties, depending on data given', () => {
    const e = kittyPrompts.orangePetNames(puppers);

    expect(e).to.deep.equal(["Hatchet", "Butter"]);
  });

  it('should sort puppers OR kitties from oldest to youngest, depending on data given', () => {
    const e = kittyPrompts.sortByAge(puppers);

    expect(e).to.deep.equal([{
      name: 'Scout',
      age: 12,
      color: 'grey'
    }, {
      name: 'Stick',
      age: 6,
      color: 'brown'
    }, {
      name: 'Hatchet',
      age: 3,
      color: 'orange'
    }, {
      name: 'Butter',
      age: 1,
      color: 'orange'
    }]);
  });

  it('should increase the age of puppers OR kitties by 2 years, depending on data given', () => {
    const e = kittyPrompts.growUp(puppers);

    expect(e).to.deep.equal([{
      name: 'Scout',
      age: 14,
      color: 'grey'
    }, {
      name: 'Stick',
      age: 8,
      color: 'brown'
    }, {
      name: 'Hatchet',
      age: 5,
      color: 'orange'
    }, {
      name: 'Butter',
      age: 3,
      color: 'orange'
    }]);
  });
});
