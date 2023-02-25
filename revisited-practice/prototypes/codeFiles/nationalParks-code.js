const { nationalParks } = require('../datasets/nationalParks');

const nationalParksPrompts = {
  /// Return an object containing the names of which parks I need to visit and the ones I have already visited.
  // ex: {
  //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
  //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
  // }
  getParkVisitList() {
    let notVisited = [];
    let visited = [];

    return nationalParks.reduce((list, park) => {
      if (!park.visited) {
        notVisited.push(park.name);
      }
      if (park.visited) {
        visited.push(park.name);
      }

      list.parksToVisit = notVisited;
      list.parksVisited = visited;

      return list;
    }, {});
    // try and refactor for less code? current code is very clear and readable though
  },

  // Return an array of objects where the key is the state and the value is its National Park
  // ex: [ { Colorado: 'Rocky Mountain' },
  // { Wyoming: 'Yellowstone' },
  // { Montana: 'Glacier' },
  // { Maine: 'Acadia' },
  // { Utah: 'Zion' },
  // { Florida: 'Everglades' } ]
  getParkInEachState() {
    return nationalParks.reduce((list, park) => {
      list.push({
        [park.location]: park.name
      });

      return list;
    }, []);
  },

  // Return an array of all the activities I can do in a National Park. Make sure to exclude duplicates.
  // ex: [ 'hiking', 'shoeshoing', 'camping', 'fishing', 'boating', 'watching wildlife', 'cross-country skiing', 'swimming', 'bird watching', 'canyoneering', 'backpacking', 'rock climbing' ]
  getParkActivities() {
    return nationalParks.reduce((list, park) => {
      park.activities.forEach(activity => {
        if (!list.includes(activity)) {
          list.push(activity);
        }
      });

      return list;
    }, []);
  }
};

module.exports = nationalParksPrompts;