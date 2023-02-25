const { weather } = require('../datasets/weather');

const weatherPrompts = {
  // Return an array of all the average temperatures.
  // ex: [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]
  getAverageTemps() {
    return weather.map(element => (
      (element.temperature.high + element.temperature.low) / 2
    ));
  },

  // Return an array of sentences of the locations that are sunny and mostly sunny. Include the location and weather type.
  // ex: [ 'Atlanta, Georgia is sunny.',
  // 'New Orleans, Louisiana is sunny.',
  // 'Raleigh, North Carolina is mostly sunny.' ]
  findSunnySpots() {
    return weather.reduce((list, element) => {
      if (element.type.includes('sunny')) {
        list.push(`${element.location} is ${element.type}.`);
      }
      return list;
    }, []);
  },

  // Return the location with the highest humidity.
  // ex: {
  //   location: 'Portland, Oregon',
  //   type: 'cloudy',
  //   humidity: 84,
  //   temperature: { high: 49, low: 38 }
  // }
  findHighestHumidity() {
    return weather.sort((first, last) => {
      return last.humidity - first.humidity;
    })[0];
  }
};

module.exports = weatherPrompts;