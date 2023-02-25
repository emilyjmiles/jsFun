const chai = require("chai");
const expect = chai.expect;

const { classrooms } = require('../datasets/classrooms');
const classPrompts = require('../codeFiles/classrooms-code');

describe("Class Prompts", () => {
  it("should return a list of all front-end classrooms", () => {
    const e = classPrompts.feClassrooms();

    expect(e).to.deep.equal([{
      roomLetter: "A",
      program: "FE",
      capacity: 32
    }, {
      roomLetter: "C",
      program: "FE",
      capacity: 27
    }, {
      roomLetter: "E",
      program: "FE",
      capacity: 22
    }, {
      roomLetter: "G",
      program: "FE",
      capacity: 29
    }]);
  });

  it("should return key value pairs for each program and its total capacity", () => {
    const e = classPrompts.totalCapacities();

    expect(e).to.deep.equal({
      feCapacity: 110,
      beCapacity: 96
    });
  });

  it("should return a list of classrooms from smallest to largest capacity", () => {
    const e = classPrompts.sortByCapacity();

    expect(e).to.deep.equal([{
      roomLetter: "H",
      program: "BE",
      capacity: 18
    }, {
      roomLetter: "F",
      program: "BE",
      capacity: 19
    }, {
      roomLetter: "E",
      program: "FE",
      capacity: 22
    }, {
      roomLetter: "C",
      program: "FE",
      capacity: 27
    }, {
      roomLetter: "B",
      program: "BE",
      capacity: 29
    }, {
      roomLetter: "G",
      program: "FE",
      capacity: 29
    }, {
      roomLetter: "D",
      program: "BE",
      capacity: 30
    }, {
      roomLetter: "A",
      program: "FE",
      capacity: 32
    }]);
  });
});
