const chai = require("chai");
const expect = chai.expect;

const { breweries } = require('../datasets/breweries');
const breweryPrompts = require('../codeFiles/breweries-code');

describe("Brewery Prompts", () => {
  it("should return the total beer count for all breweries", () => {
    const e = breweryPrompts.getBeerCount();

    expect(e).to.deep.equal(40);
  });

  it("should return a list of all breweries and their beer count", () => {
    const e = breweryPrompts.getBreweryBeerCount();

    expect(e).to.deep.equal([{
      name: "Little Machine Brew",
      beerCount: 12
    }, {
      name: "Ratio Beerworks",
      beerCount: 5
    }, {
      name: "Spangalang Brewery",
      beerCount: 9
    }, {
      name: "Beryl's Beer Co.",
      beerCount: 7
    }, {
      name: "Platt Park Brewing Co.",
      beerCount: 7
    }]);
  });

  it("should return the beer count for a given brewery", () => {
    const ratioCount = breweryPrompts.getSingleBreweryBeerCount('Ratio Beerworks');
    const plattCount = breweryPrompts.getSingleBreweryBeerCount('Platt Park Brewing Co.');

    expect(ratioCount).to.equal(5);
    expect(plattCount).to.equal(7);
  });

  it("should return the beer with the highest ABV from all breweries", () => {
    const e = breweryPrompts.findHighestAbvBeer();

    expect(e).to.deep.equal({
      name: "Barrel Aged Nature's Sweater",
      type: "Barley Wine",
      abv: 10.9,
      ibu: 40
    });
  });
});
