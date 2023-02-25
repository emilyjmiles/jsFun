const { dinosaurs, humans, movies } = require('../datasets/dinosaurs');

const dinosaurPrompts = {
  // Return an object where each key is a movie title and each value is the number of awesome dinosaurs in that movie.
  // ex: {
  //   'Jurassic Park': 5,
  //   'The Lost World: Jurassic Park': 8,
  //   'Jurassic Park III': 9,
  //   'Jurassic World': 11,
  //   'Jurassic World: Fallen Kingdom': 18
  // }
  countAwesomeDinosaurs() {
    return movies.reduce((list, movie) => {
      let count = 0;

      movie.dinos.forEach(dino => {
        if (dinosaurs[dino].isAwesome) {
          count += 1;
        }
      });

      list[movie.title] = count;

      return list;
    }, {});
  },

  // Return an object where each key is a movie director's name and each value is an object whose key is a movie's title and whose value is the average age of the cast on the release year of that movie.
  // ex: {
  //     'Steven Spielberg':
  //       {
  //         'Jurassic Park': 34,
  //         'The Lost World: Jurassic Park': 37
  //       },
  //     'Joe Johnston':
  //       {
  //         'Jurassic Park III': 44
  //       },
  //     'Colin Trevorrow':
  //       {
  //         'Jurassic World': 56
  //         },
  //     'J. A. Bayona':
  //       {
  //         'Jurassic World: Fallen Kingdom': 59
  //       }
  //   }

  averageAgePerMovie() {
    return movies.reduce((list, movie) => {
      const average = movie.cast.reduce((acc, actor) => {
        const incrementer = ((movie.yearReleased - humans[actor].yearBorn) / movie.cast.length);

        acc += incrementer;

        return acc;
      }, 0);

      if (!list[movie.director]) {
        list[movie.director] = {};
      }

      if (!list[movie.director][movie.title]) {
        list[movie.director][movie.title] = Math.floor(average);
      }

      return list;
    }, {});
  },

  // Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.
  // ex: [{
  //     name: 'Justin Duncan',
  //     nationality: 'Alien',
  //     imdbStarMeterRating: 0
  //   },
  //   {
  //     name: 'Karin Ohman',
  //     nationality: 'Chinese',
  //     imdbStarMeterRating: 0
  //   },
  //   {
  //     name: 'Tom Wilhoit',
  //     nationality: 'Kiwi',
  //     imdbStarMeterRating: 1
  //   }, {
  //     name: 'Jeo D',
  //     nationality: 'Martian',
  //     imdbStarMeterRating: 0
  //   }]

  uncastActors() {
    const humansKeys = Object.keys(humans);

    movies.filter(movie => movie.cast.forEach(actor => {
      humansKeys.forEach((key, index) => {
        if (actor === key) {
          humansKeys.splice(index, 1);
        }
      });
      return humansKeys;
    }));

    const actorsList = humansKeys.reduce((list, key) => {
      list.push({
        name: key,
        nationality: humans[key].nationality,
        imdbStarMeterRating: humans[key].imdbStarMeterRating
      });

      return list;
    }, []);

    return actorsList.sort((first, last) => {
      if (first.nationality < last.nationality) return -1;
      if (first.nationality > last.nationality) return 1;
      return 0;
    });
  },

  // Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.
  // ex: [ { name: 'Sam Neill', ages: [ 46, 54 ] },
  //   { name: 'Laura Dern', ages: [ 26, 34 ] },
  //   { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
  //   { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
  //   { name: 'Ariana Richards', ages: [ 14, 18 ] },
  //   { name: 'Joseph Mazello', ages: [ 10, 14 ] },
  //   { name: 'BD Wong', ages: [ 33, 55, 58 ] },
  //   { name: 'Chris Pratt', ages: [ 36, 39 ] },
  //   { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
  actorsAgesInMovies() {
    const castActors = [];

    movies.forEach(movie => movie.cast.forEach(actor => {
      if (!castActors.includes(actor)) {
        castActors.push(actor);
      }
    }));

    return castActors.reduce((list, actor) => {
      let actorAges = [];
      movies.forEach(movie => {
        if (movie.cast.includes(actor)) {
          actorAges.push(movie.yearReleased - humans[actor].yearBorn);
        }
      });

      if (!list.includes({ name: actor })) {
        list.push({ name: actor, ages: actorAges });
      }

      return list;
    }, []);

  }
};

module.exports = dinosaurPrompts;
