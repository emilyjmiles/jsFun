const { constellations, stars } = require('../datasets/astronomy');

const astronomyPrompts = {
  // Return an array of all the star objects that appear in any of the constellations listed in the constellations object.
  // ex: [
  //   { name: 'Rigel', visualMagnitude: 0.13, constellation: 'Orion', lightYearsFromEarth: 860, color: 'blue' },
  //   { name: 'Betelgeuse', visualMagnitude: 0.5, constellation: 'Orion', lightYearsFromEarth: 640, color: 'red' },
  //   { name: 'Achernar', visualMagnitude: 0.46, constellation: 'The Plow', lightYearsFromEarth: 140, color: 'blue' },
  //   { name: 'Hadar', visualMagnitude: 0.61, constellation: 'The Little Dipper', lightYearsFromEarth: 350, color: 'blue' }
  // ]
  starsInConstellations() {
    const keys = Object.keys(constellations);

    return keys.reduce((list, key) => {
      stars.forEach(star => {
        if (constellations[key].starNames.includes(star.name)) {
          list.push(star);
        }
      });

      return list;
    }, []);
  },

  // Return an object with keys of the different colors of the stars, whose values are arrays containing the star objects that match.
  // ex: {
  //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
  //   white: [{obj}, {obj}],
  //   yellow: [{obj}, {obj}],
  //   orange: [{obj}],
  //   red: [{obj}]
  // }
  starsByColor() {
    return stars.reduce((list, star) => {
      if (!list[star.color]) {
        list[star.color] = [];
      }

      list[star.color].push(star);

      return list;
    }, {});
  },

  // Sort the stars by brightness and return an array of the star's constellation names.
  // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
  // ex: [ "Canis Major", "Carina", "Boötes", "Auriga", "Orion", "Lyra", "Canis Minor", "The Plow", "Orion", "The Little Dipper" ]
  constellationsStarsExistIn() {
    stars.sort((first, last) => first.visualMagnitude - last.visualMagnitude);

    return stars.reduce((list, star) => {
      if (star.constellation) {
        list.push(star.constellation);
      }

      return list;
    }, []);
  }
};

module.exports = astronomyPrompts;