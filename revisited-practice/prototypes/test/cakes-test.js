const chai = require("chai");
const expect = chai.expect;

const { cakes } = require('../datasets/cakes');
const cakePrompts = require('../codeFiles/cakes-code');

describe("Cake Prompts", () => {
  it("should return a list of cakes with the flavor and number of that flavor in stock", () => {
    const e = cakePrompts.stockPerCake();

    expect(e).to.deep.equal([{
      flavor: "dark chocolate",
      inStock: 15
    }, {
      flavor: "yellow",
      inStock: 14
    }, {
      flavor: "white chiffon",
      inStock: 0
    }, {
      flavor: "butter rum",
      inStock: 9
    }, {
      flavor: "vanilla",
      inStock: 21
    }, {
      flavor: "honey",
      inStock: 0
    }]);
  });

  it("should return a list of only the cakes in stock", () => {
    const e = cakePrompts.onlyInStock();

    expect(e).to.deep.equal([{
      cakeFlavor: "dark chocolate",
      filling: null,
      frosting: "dark chocolate ganache",
      toppings: ["dutch process cocoa", "toasted sugar", "smoked sea salt"],
      inStock: 15
    }, {
      cakeFlavor: "yellow",
      filling: "citrus glaze",
      frosting: "chantilly cream",
      toppings: ["berries", "edible flowers"],
      inStock: 14
    }, {
      cakeFlavor: "butter rum",
      filling: "ginger cardamom swirl",
      frosting: "spiced rum glaze",
      toppings: ["crystallized ginger", "toasted sugar"],
      inStock: 9
    }, {
      cakeFlavor: "vanilla",
      filling: "St Germaine",
      frosting: "whipped cream",
      toppings: ["smoked sea salt", "crystallized ginger", "berries"],
      inStock: 21
    }]);
  });

  it("should return the total inventory amount of all cakes in stock", () => {
    const e = cakePrompts.totalInventory();

    expect(e).to.deep.equal(59);
  });

  it("should return a list of all unique toppings needed to bake every flavor of cake", () => {
    const e = cakePrompts.allToppings();

    expect(e).to.deep.equal(["dutch process cocoa", "toasted sugar", "smoked sea salt", "berries", "edible flowers", "mint", "cranberry", "crystallized ginger"]);
  });

  it("should return a list with unique toppings and the quantity needed for all cake flavors", () => {
    const e = cakePrompts.groceryList();

    expect(e).to.deep.equal({
      "dutch process cocoa": 1,
      "toasted sugar": 3,
      "smoked sea salt": 3,
      berries: 2,
      "edible flowers": 2,
      mint: 1,
      cranberry: 1,
      "crystallized ginger": 2
    });
  });
});
