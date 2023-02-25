const chai = require("chai");
const expect = chai.expect;

const { nationalParks } = require('../datasets/nationalParks');
const nationalParksPrompts = require('../codeFiles/nationalParks-code');

describe("National Park Prompts", () => {
  it("should return a list of parks to visit and a list of parks already visted", () => {
    const e = nationalParksPrompts.getParkVisitList();

    expect(e).to.deep.equal({
      parksToVisit: ['Yellowstone', 'Glacier', 'Everglades'],
      parksVisited: ['Rocky Mountain', 'Acadia', 'Zion']
    });
  }),

    it("should return a list of states and the National Park for that state", () => {
      const e = nationalParksPrompts.getParkInEachState();

      expect(e).to.deep.equal(
        [
          { Colorado: 'Rocky Mountain' },
          { Wyoming: 'Yellowstone' },
          { Montana: 'Glacier' },
          { Maine: 'Acadia' },
          { Utah: 'Zion' },
          { Florida: 'Everglades' }
        ]
      );
    }),

    it("should return a list of all unique activities people can do in a National Park", () => {
      const e = nationalParksPrompts.getParkActivities();

      expect(e).to.deep.equal(
        ['hiking',
          'shoeshoing',
          'camping',
          'fishing',
          'boating',
          'watching wildlife',
          'cross-country skiing',
          'swimming',
          'bird watching',
          'canyoneering',
          'backpacking',
          'rock climbing'
        ]
      );
    });
});
