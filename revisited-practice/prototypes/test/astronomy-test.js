const chai = require("chai");
const expect = chai.expect;

const { constellations, stars } = require('../datasets/astronomy');
const astronomyPrompts = require('../codeFiles/astronomy-code');

describe("Astronomy Prompts", () => {
  it("should return a list of star details for each star in a constellation", () => {
    const e = astronomyPrompts.starsInConstellations();

    expect(e).to.deep.equal([{
      name: 'Rigel',
      visualMagnitude: 0.13,
      constellation: 'Orion',
      lightYearsFromEarth: 860,
      color: 'blue'
    }, {
      name: 'Betelgeuse',
      visualMagnitude: 0.5,
      constellation: 'Orion',
      lightYearsFromEarth: 640,
      color: 'red'
    },
    {
      name: 'Achernar',
      visualMagnitude: 0.46,
      constellation: 'The Plow',
      lightYearsFromEarth: 140,
      color: 'blue'
    },
    {
      name: 'Hadar',
      visualMagnitude: 0.61,
      constellation: 'The Little Dipper',
      lightYearsFromEarth: 350,
      color: 'blue'
    }
    ]);
  });

  it("should return an list of unique star colors and the details for each star that matches that color", () => {
    const e = astronomyPrompts.starsByColor();

    expect(e).to.deep.equal({
      blue: [{
        name: "Sirius",
        visualMagnitude: -1.46,
        constellation: "Canis Major",
        lightYearsFromEarth: 8.6,
        color: "blue"
      }, {
        name: "Vega",
        visualMagnitude: .3,
        constellation: "Lyra",
        lightYearsFromEarth: 25,
        color: "blue"
      }, {
        name: "Rigel",
        visualMagnitude: .13,
        constellation: "Orion",
        lightYearsFromEarth: 860,
        color: "blue"
      }, {
        name: "Achernar",
        visualMagnitude: .46,
        constellation: "The Plow",
        lightYearsFromEarth: 140,
        color: "blue"
      }, {
        name: "Hadar",
        visualMagnitude: .61,
        constellation: "The Little Dipper",
        lightYearsFromEarth: 350,
        color: "blue"
      }],
      white: [{
        name: "Canopis",
        visualMagnitude: -.74,
        constellation: "Carina",
        lightYearsFromEarth: 310,
        color: "white"
      }, {
        name: "Procyon",
        visualMagnitude: .34,
        constellation: "Canis Minor",
        lightYearsFromEarth: 11,
        color: "white"
      }],
      yellow: [{
        name: "Alpha Centauri",
        visualMagnitude: -.27,
        constellation: "",
        lightYearsFromEarth: 4.4,
        color: "yellow"
      }, {
        name: "Capella",
        visualMagnitude: .08,
        constellation: "Auriga",
        lightYearsFromEarth: 42,
        color: "yellow"
      }],
      orange: [{
        name: "Arcturus",
        visualMagnitude: -.05,
        constellation: "Boötes",
        lightYearsFromEarth: 37,
        color: "orange"
      }],
      red: [{
        name: "Betelgeuse",
        visualMagnitude: .5,
        constellation: "Orion",
        lightYearsFromEarth: 640,
        color: "red"
      }]
    });
  });

  it("should return a list of constellations from brightest to dullest", () => {
    const e = astronomyPrompts.constellationsStarsExistIn();

    expect(e).to.deep.equal(["Canis Major", "Carina", "Boötes", "Auriga", "Orion", "Lyra", "Canis Minor", "The Plow", "Orion", "The Little Dipper"]);
  });
});
