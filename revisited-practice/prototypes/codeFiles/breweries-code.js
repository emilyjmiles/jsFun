const { breweries } = require('../datasets/breweries');

const breweryPrompts = {
  // Return the total beer count of all beers for every brewery.
  // Answer: 40
  getBeerCount() {
    return breweries.reduce((total, brewery) => {
      total += brewery.beers.length;

      return total;
    }, 0);
  },

  // Return an array of objects where each object has the name of a brewery and the count of the beers that brewery has.
  // ex: [
  //  { name: 'Little Machine Brew', beerCount: 12 },
  //  { name: 'Ratio Beerworks', beerCount: 5},
  // ...etc.
  // ]
  getBreweryBeerCount() {
    return breweries.reduce((list, brewery) => {
      list.push({
        name: brewery.name,
        beerCount: brewery.beers.length
      });

      return list;
    }, []);
  },

  // Return a number that is the count of beers that the specified brewery has.
  // ex: given 'Ratio Beerworks', returns 5
  getSingleBreweryBeerCount(breweryName) {
    const findBrewery = breweries.find(brewery => brewery.name === breweryName);

    return findBrewery.beers.length;
  },

  // Return the beer which has the highest ABV of all beers.
  // ex: { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
  findHighestAbvBeer() {
    const getBeers = breweries.flatMap(brewery => brewery.beers);

    return getBeers.sort((first, last) => {
      return last.abv - first.abv;
    })[0];
  }
};

module.exports = breweryPrompts;
