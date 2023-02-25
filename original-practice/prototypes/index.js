const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');


// SINGLE DATASETS
// =================================================================


// DATASETS: kitties from ./datasets/kitties & puppers from ./datasets/puppers
const kittyPrompts = {
  // Return an array of just the names of kitties who are orange ex:['Tiger', 'Snickers']
  orangePetNames(animals) {
    // const orangeAnimalNames = animals
    //   .filter(animal=> animal.color === 'orange')
    //   .map(animal => animal.name);
    // return orangeAnimalNames;
    const orangeAnimalNames = animals.reduce((names, animal) => {
      if(animal.color === 'orange') {
        names.push(animal.name)
      }
      return names
    }, [])
    return orangeAnimalNames;
  },

  // Sort the kitties by their age
  sortByAge(animals) {
    const sortAnimalsByAge = animals
      .sort((firstAnimal, lastAnimal) => {
        return lastAnimal.age - firstAnimal.age
      });
        return sortAnimalsByAge;   
  },

  // Return an array of kitties who have all grown up by 2 years ex:
    // [
    // {name: 'Felicia', age: 4, color: 'grey'},
    // {name: 'Tiger', age: 7, color: 'orange'},
    // ...etc]
  growUp(animals) {
    // const ageAnimals = animals
    //   .filter(animal => animal.age += 2)
    //   .map(animal => animal)
    //   return ageAnimals;
    const ageAnimals = animals.reduce((allAnimals, animal) => {
      animal.age += 2
      allAnimals.push(animal)
      return allAnimals
    }, [])
    return ageAnimals;
  }

  // Refactor the above functions using arguments and parameters so that they can perform the same utility for the kitties or puppers datasets, depending on what arguments you send through.
};


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------


// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
  // Create an object whose keys are the names of people, and whose values are arrays that include the names of the clubs that person is a part of. ex:
  // {Louisa: ['Drama', 'Art'], Pam: ['Drama', 'Art', 'Chess'], ...etc}
  membersBelongingToClubs(clubTypes) {
    const clubsList = clubTypes.reduce((personsClubs, club) => {
      club.members.forEach(member => {
        if (!personsClubs[member]) {
        personsClubs[member] = []
        } if (club.members.includes(member)) {
          personsClubs[member].push(club.club)
        }
      })

      return personsClubs
    }, {})

    return clubsList
  }
};


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------


// DATASET: mods from ./datasets/mods
const modPrompts = {
  // Return an array of objects where the keys are mod (the number of the module) and studentsPerInstructor (how many students per instructor there are for that mod) ex:
  // [
  //   { mod: 1, studentsPerInstructor: 9 },
  //   { mod: 2, studentsPerInstructor: 11 },
  //   { mod: 3, studentsPerInstructor: 10 },
  //   { mod: 4, studentsPerInstructor: 8 }
  // ]
  studentsPerMod() {
    // const numberOfStudentsPerInstructor = mods.map(mod => {
    //   return { mod: mod.mod, studentsPerInstructor: (mod.students / mod.instructors)} 
    // })
    const numberOfStudentsPerInstructor = mods.reduce((modList, mod) => {
        modList.push({mod: mod.mod, studentsPerInstructor: mod.students /mod.instructors})
      return modList
    }, [])
    return numberOfStudentsPerInstructor
  }
};


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------


// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
// Return an array of objects that include just the flavor of the cake and how
// much of that cake is in stock ex:
// [
//    { flavor: 'dark chocolate', inStock: 15 },
//    { flavor: 'yellow', inStock: 14 },
//    ..etc
// ]
  stockPerCake() {
    const flavorsInStock = cakes.reduce((currentCakes, cake) => {
      const availableCakes = {
        flavor: cake.cakeFlavor,
        inStock: cake.inStock
      }
      currentCakes.push(availableCakes)
      return currentCakes
    }, [])
    return flavorsInStock;
  },

// Return an array of only the cakes that are in stock ex:
// [
//   {cakeFlavor: 'dark chocolate', filling: null, frosting: 'dark chocolate ganache', toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'], inStock: 15},
// {cakeFlavor: 'yellow', filling: 'citrus glaze', frosting: 'chantilly cream', toppings: ['berries', 'edible flowers'], inStock: 14},
// ..etc]
  onlyInStock() {
    const cakesInStock = cakes.filter(cake => cake.inStock > 0)
    return cakesInStock
  },

// Return the total amount of cakes in stock ex: 59
  totalInventory() {
    const cakeInventory = cakes.reduce((total, cake) => {
      total += cake.inStock
      return total;
    }, 0)
    return cakeInventory;
  },

// Return an array of all unique toppings (no duplicates) needed to bake every cake in the dataset ex:
// ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
  allToppings() {
    const uniqueToppings = cakes.reduce((availableToppings, cake) => {
      cake.toppings.forEach(topping => {
        if(!availableToppings.includes(topping)) {
          availableToppings.push(topping)
        }
      })
      return availableToppings
    }, [])
    return uniqueToppings
  },

  // I need to make a grocery list. Please give me an object where the keys are each topping, and the values are the amount of that topping I need to buy ex:
  // {'dutch process cocoa': 1, 'toasted sugar': 3, 'smoked sea salt': 3, 'berries': 2, ...etc}
  // we have an array of objects
  // we want to return and object with keys of topping types and values of how many cakes need that topping
  // 1. we need to iterate through the array of objects and for each topping we need to create a key
  // 2. then we need to iterate through the array and for each cake that includes that topping we need to increment by 1
  groceryList() {
    const toppingAmounts = cakes.reduce((toppingsList, cake) => {
      cake.toppings.forEach(topping => {
        if (!toppingsList[topping]) {
          toppingsList[topping] = 0
        }
        toppingsList[topping]++
      })
      return toppingsList
    }, {})
    return toppingAmounts
  }
};


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------


// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
// Create an array of just the front-end classrooms. ex:
// [
//   { roomLetter: 'A', program: 'FE', capacity: 32 },
//   { roomLetter: 'C', program: 'FE', capacity: 27 },
//   { roomLetter: 'E', program: 'FE', capacity: 22 },
//   { roomLetter: 'G', program: 'FE', capacity: 29 }
// ]
  feClassrooms() {
    const filteredFEClasses = classrooms
      .filter(classroom => classroom.program === 'FE')
    return filteredFEClasses
  },

  // Create an object where the keys are 'feCapacity' and 'beCapacity', and the values are the total capacity for all classrooms in each program ex:
  // {feCapacity: 110, beCapacity: 96}
  totalCapacities() {
    const classCapacity = classrooms.reduce((capacity, classroom) => {
      let feCap = 0;
      let beCap = 0;
      classrooms.forEach(classroom => {
        if(classroom.program === 'FE') {
          feCap += classroom.capacity
        } else {
          beCap += classroom.capacity
        }
      })
      capacity = { feCapacity: feCap, beCapacity: beCap}
      return capacity
    }, {})
    return classCapacity
  },

  // Return the array of classrooms sorted by their capacity (least capacity to greatest)
  sortByCapacity() {
    const sortClassCapacity = classrooms.sort((firstClassroom, lastClassroom) => {
      return firstClassroom.capacity - lastClassroom.capacity;
    })
    return sortClassCapacity
  }
};


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------


// DATASET: books from './datasets/books
const bookPrompts = {
  // Your function should access the books data through a parameter (it is being passed as an argument in the test file) return an array of all book titles that are not horror or true crime. Eg:
  // [ '1984', 
  //   'The Great Gatsby', 
  //   'Lord of the Flies', 
  //   'Harry Potter and the Sorcerer\'s Stone', 
  //   'The Hitchhiker\'s Guide to the Galaxy', 
  //   'Flowers for Algernon', 
  //   'Slaughterhouse-Five', 
  //   'The Handmaid\'s Tale', 
  //   'The Metamorphosis', 
  //   'Brave New World', 
  //   'Life of Pi', 
  //   'The Curious Incident of the Dog in the Night - Time', 
  //   'The Bell Jar', 
  //   'Catch-22', 
  //   'Treasure Island' ]

  // we have an array of objects
  // we want an array of just the titles of each book that meets a conditional
  // 1. we want to iterate through the array
  // 2. if the book genre does not equal horror and also does not equal true crime we want to return only the book titles in a new array
  removeViolence(books) {
    // const nonViolentBooks = books
    //   .filter(book => book.genre !== 'Horror' && book.genre !== 'True Crime')
    //   .map(book => book.title)
    // return nonViolentBooks
    const nonViolentBooks = books.reduce((noScaryBooks, book) => {
      if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
        noScaryBooks.push(book.title)
      }
      return noScaryBooks
    }, [])
  return nonViolentBooks
  },

  // Return an array of objects containing all books that were published in the 90's and 00's. Include the title and the year Eg:
  // [
  //  { title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
  //  { title: 'Life of Pi', year: 2001 },
  //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }
  // ]

  // 1. we want to iterate through the array of objects and create a new array of objects
  // 2. if the book was published in 1990 of later we want to return a new book object with just the book title and year it was published
  // 3. then we want to push the new book object into an array
  getNewBooks(books) {
    const newestBooks = books.reduce((newBookList, book) => {
      if (book.published >= 1990) {
        newBookList.push({title: book.title, year: book.published})
      }
      return newBookList
    }, [])
    return newestBooks
  },

  // Return an array of objects containing all books that were published after the specified year without the author or genre data. The published property should be changed to year for the returned books. ex: given 1990, return
  // [
  //  { title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
  //  { title: 'Life of Pi', year: 2001 },
  //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }
  // ]
  getBooksByYear(books, year) {
    const newestBooks = books.reduce((newBookList, book) => {
      if (book.published >= year) {
        newBookList.push({title: book.title, year: book.published})
      }
      return newBookList
    }, [])
    return newestBooks
  }
};


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------


// DATASET: weather from './datasets/weather
const weatherPrompts = {
  // Return an array of all the average temperatures. Eg:
  // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

  // we have an array of objects
  // we want to return and array of avarage number values
  // 1. we want to iterate through the array of object
  // 2. for each element we want add the temperature.high and the temperature.low together and divide it by 2
  // 3. then we want creat a new array with those values
  getAverageTemps() {
    // const tempAverages = weather.reduce((averagesList, singleWeather) => {
    //   averagesList.push((singleWeather.temperature.high + singleWeather.temperature.low) / 2)
    //   return averagesList
    // }, [])
    const tempAverages = []
    weather.forEach(( singleWeather) => {
      tempAverages.push((singleWeather.temperature.high + singleWeather.temperature.low) / 2)
    })
    return tempAverages
  },

  // Return an array of sentences of the locations that are sunny and mostly sunny. Include the location and weather type. Eg:
  // [ 'Atlanta, Georgia is sunny.', 
  //   'New Orleans, Louisiana is sunny.', 
  //   'Raleigh, North Carolina is mostly sunny.' ]
  findSunnySpots() {
    const sunnyLocations = weather
      .filter(singleWeather => singleWeather.type.includes('sunny'))
      .map(singleWeather => `${singleWeather.location} is ${singleWeather.type}.`)
    return sunnyLocations
  },

  // Return the location with the highest humidity. Eg:
  // {
  //   location: 'Portland, Oregon',
  //   type: 'cloudy',
  //   humidity: 84,
  //   temperature: { high: 49, low: 38 }
  // }
  findHighestHumidity() {
    const sortedByHumidity = weather.sort((firstLocation, lastLocation) => {
      return lastLocation.humidity - firstLocation.humidity
    })
    return sortedByHumidity[0]
  }
};


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks
const nationalParksPrompts = {
  // Return an object containing the names of which parks I need to visit and the ones I have already visited eg:
  // {
  //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
  //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
  // }

  // we have an array of objects
  // we want to return an object of arrays
  // 1. we want to iterate through the array of objects
        // we need to create a new object with two keys that have values of arrays
  // 2. if the park.visited equals false we want to push the park.name into an array with the key parksToVisit
  // 3. else we want tp push the park.name into an array with the key parksVisited
  getParkVisitList() {
    const visitList = nationalParks.reduce((parkList, park) => {
      parkList.parksToVisit = []
      parkList.parksVisited = []
      nationalParks.forEach(park => {
        if (park.visited === false) {
          parkList.parksToVisit.push(park.name)
        } else {
          parkList.parksVisited.push(park.name)
        }
      })
      return parkList
    }, {})
    return visitList
  },
  
  // Return an array of all the activities I can do
  // in a National Park. Make sure to exclude duplicates. eg:
  // [ 'hiking',
  //   'shoeshoing',
  //   'camping',
  //   'fishing',
  //   'boating',
  //   'watching wildlife',
  //   'cross-country skiing',
  //   'swimming',
  //   'bird watching',
  //   'canyoneering',
  //   'backpacking',
  //   'rock climbing' ]
  getParkActivities() {
    const allActivities = nationalParks.reduce((list, park) => {
      park.activities.forEach(activity => {
        if (!list.includes(activity)) {
          list.push(activity)
        }
      })
      return list
    }, [])
    return allActivities
  },

  // Return an array of objects where the key is the state and the value is its National Park eg: 
  // [ 
  //   { Colorado: 'Rocky Mountain' },
  //   { Wyoming: 'Yellowstone' },
  //   { Montana: 'Glacier' },
  //   { Maine: 'Acadia' },
  //   { Utah: 'Zion' },
  //   { Florida: 'Everglades' } 
  // ]
  getParkInEachState() {
    const parksByState = nationalParks.map(park => {
      return {[park.location]: park.name} 
    })
    return parksByState
  }
};


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------


// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  // Return the total beer count of all beers for every brewery ex:
  // 40
  getBeerCount() {
    let totalBeerCount = breweries.reduce((allBeers, breweryBeers) => {
        allBeers += breweryBeers.beers.length;
        return allBeers
      }, 0);
      return totalBeerCount
  },

  // Return an array of objects where each object has the name of a brewery
  // and the count of the beers that brewery has ex:
  // [
  //  { name: 'Little Machine Brew', beerCount: 12 },
  //  { name: 'Ratio Beerworks', beerCount: 5},
  // ...etc.
  // ]

  // we have an array of objects
  // we want to return a new array of objects
  // 1. we want to iterate through the array
  // 2. for each element in the array we want to return the name and the number of beers listed
  // 3. we need to iterate through the array of beers and increment by one for each beer to get the beer count
  getBreweryBeerCount() {
    const numberOfBeersByBrewery = breweries.reduce((list, brewery) => {
      let numberOfBeers = 0
      brewery.beers.forEach(beer => {
        numberOfBeers++
      })
      list.push({name: brewery.name, beerCount: numberOfBeers})
      return list
    }, [])
    return numberOfBeersByBrewery
  },

  // Return a number that is the count of beers that the specified
  // brewery has ex:
  // given 'Ratio Beerworks', return 5
  getSingleBreweryBeerCount(breweryName) {
    const breweryBeerCount = breweries.reduce((beerCount, brewery) => {
      brewery.beers.forEach(beer => {
        if (brewery.name === breweryName) {
          beerCount++
        }
      })
      return beerCount
    }, 0)
    return breweryBeerCount
  },
  
  // Return the beer which has the highest ABV of all beers
  // ex:
  // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
  findHighestAbvBeer() {
    const hightestABV = breweries.reduce((abvName, brewery) => {
      abvName = brewery.beers.sort((firstBeer, lastBeer) => lastBeer.abv - firstBeer.abv)
      return abvName[0]
    }, {})
    return hightestABV
  }
};


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------


// DATASET: boardGames from './datasets/boardGames

const boardGamePrompts = {
  // Return an array of just the names of the games within a specified type. 
  // ex: given an argument of "strategy", return
  // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]
  
  // we have an object with keys that describe the type of game and an array of game objects as the value for each key
  // we want to return an array of only the names of the game when the type is passed in as an argument
  // 1. we need to be able to access the keys -- most likely need to use Object.keys so we can iterate through that array -- nevermind!! since there is a parameter we can use bracket notaion
  // 2. once we get into the value or each key, we need to iterate through the array of objects and return ONLY the names
  listGames(type) {
    const gameNames = boardGames[type].map(type => type.name)
    return gameNames;
  },

  // Return an array of just the names of the games within a specified 
  // type, sorted alphabetically. 
  // ex: given an argument of "childrens", return
  // ["Candy Land", "Connect Four", "Operation", "Trouble"]
  listGamesAlphabetically(type) {
    return this.listGames(type).sort();
  },

  // Return an object which is the highest rated game within the specified type.
  // ex: given the argument of 'party', return
  // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },
  
  // 1. we need to dig into the object using bracket notation
  // 2. then iterate over the array of values and sort by ratings
  // 3. then we want to return the first element in the sorted array
  findHighestRatedGamesByType(type) {
    // original attempt 
    // const sortedGames = boardGames[type].sort((firstGame, lastGame) => {
    //   return lastGame.rating - firstGame.rating
    // })
    // return sortedGames[0]

    // refactored attempt since sort is mutating the original array and a variable declaration is not needed
    return boardGames[type].sort((firstGame, lastGame) => {
      return lastGame.rating - firstGame.rating
    })[0]
    // sort is a mutator, so if you use it, it will change the original array for all other problems going forward
    // if your do NOT want to mutate the original array you would need to make a copy of it using a non mutator method
        // Array.from(data set goes here) -- returns a new array which is a COPY of the original array, needs to be set to a variable
  },
   
  // Return the average rating score for the specified type.
  // ex: given the argument of "strategy", return 7
  // note: do not worry about rounding your result.
  averageScoreByType(type) {
    const gameRatingsAverage = boardGames[type].reduce((average, game) => {
      average += game.rating / boardGames[type].length
      return average
    }, 0)

    return gameRatingsAverage
  },

  // Return the average ratings score of any games that match the specified type
  // and maximum number of players.
  // ex: given the arguments of "strategy" and 2, return 6.16666666667
  // note: do not worry about rounding your result.
  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    const gamesByMaxPlayers = boardGames[type].filter(game => (
      game.maxPlayers === maximumPlayers
    ))

    const gameRatingsByMaxPlayers = gamesByMaxPlayers.reduce((average, game) => {
      average += game.rating / gamesByMaxPlayers.length
      return average
    }, 0)

    return gameRatingsByMaxPlayers.toFixed(2)
  }
};


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------


// DOUBLE DATASETS
// =================================================================


// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  // Return an array of instructors where each instructor is an object
  // with a name and the count of students in their module. ex:
  // [
  //  { name: 'Pam', studentCount: 21 },
  //  { name: 'Robbie', studentCount: 18 }
  // ]

  // we have two arrays of objects
  // we want to return one array of objects
  // 1. we want to iterate through the instructors array
  // 2. then we want to iterate through the cohorts array
  // 3. we want to compare the instructor.teaches to the cohort.curriculum array
  // 4. if any of the elements within both arrays match, we want to return the instructor.name and the cohort.studentCount in a new array of objects
  studentsForEachInstructor() {

  },

  // Return an object of how many students per teacher there are in each cohort ex:
  // {
  // cohort1806: 9,
  // cohort1804: 10.5
  // }
  studentsPerInstructor() {

  },

  // Return an object where each key is an instructor name and each value is
  // an array of the modules they can teach based on their skills. ex::
  // {
  //     Pam: [2, 4],
  //     Brittany: [2, 4],
  //     Nathaniel: [2, 4],
  //     Robbie: [4],
  //     Leta: [2, 4],
  //     Travis: [1, 2, 3, 4],
  //     Louisa: [1, 2, 3, 4],
  //     Christie: [1, 2, 3, 4],
  //     Will: [1, 2, 3, 4]
  //   }
  modulesPerTeacher() {

  },

  // Return an object where each key is a curriculum topic and each value is
  // an array of instructors who teach that topic ex::
  // {
  //   html: [ 'Travis', 'Louisa' ],
  //   css: [ 'Travis', 'Louisa' ],
  //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
  //   recursion: [ 'Pam', 'Leta' ]
  // }
  curriculumPerTeacher() {

  }
};


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------


// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  // Create an array of objects that each have the name of the boss and the sum
  // loyalty of all their sidekicks. ex::
  // [
  //   { bossName: 'Scar', sidekickLoyalty: 16 }
  //   { bossName: 'Ursula', sidekickLoyalty: 20 },
  //   { bossName: 'Jafar', sidekickLoyalty: 3 },
  // ]
  bossLoyalty() {
    const bossKeys = Object.keys(bosses)
    const bossSidekickLoyalty = bossKeys.reduce((list, key) => {
      let loyalty = 0;
      sidekicks.forEach(sidekick => {
        if(sidekick.boss === bosses[key].name) {
          loyalty += sidekick.loyaltyToBoss
        }
      })
      list.push({bossName: bosses[key].name, sidekickLoyalty: loyalty}) 
      return list;
    }, [])
    return bossSidekickLoyalty
  }
};


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------


// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  // Return an array of all the star objects that appear in any of the constellations
  // listed in the constellations object ex:
  // [
  //   { 
  //     name: 'Rigel',
  //     visualMagnitude: 0.13,
  //     constellation: 'Orion',
  //     lightYearsFromEarth: 860,
  //     color: 'blue' },
  //   { 
  //      name: 'Betelgeuse',
  //     visualMagnitude: 0.5,
  //     constellation: 'Orion',
  //     lightYearsFromEarth: 640,
  //     color: 'red' },
  //   {
  //     name: 'Achernar',
  //     visualMagnitude: 0.46,
  //     constellation: 'The Plow',
  //     lightYearsFromEarth: 140,
  //     color: 'blue'
  //   },
  //   {
  //     name: 'Hadar',
  //     visualMagnitude: 0.61,
  //     constellation: 'The Little Dipper',
  //     lightYearsFromEarth: 350,
  //     color: 'blue'
  //   }
  // ]

  starsInConstellations() {
 
  },

  // Return an object with keys of the different colors of the stars,
  // whose values are arrays containing the star objects that match ex:
  // {
  //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
  //   white: [{obj}, {obj}],
  //   yellow: [{obj}, {obj}],
  //   orange: [{obj}],
  //   red: [{obj}]
  // }
  starsByColor() {

  },

  /* Sort the stars by brightness and return an array of the star's constellation names. Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star ex:
   [ "Canis Major",
     "Carina",
     "Boötes",
     "Auriga",
     "Orion",
     "Lyra",
     "Canis Minor",
     "The Plow",
     "Orion",
     "The Little Dipper" ] */
  constellationsStarsExistIn() {

  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  // Return the sum of the amount of damage for all the weapons that our characters can use
  // Answer => 113
  totalDamage() {

  },

  /* Return the sum damage and total range for each character as an object.
  ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...} */
  charactersByTotal() {

  },
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  /* Return an object where each key is a movie title and each value is the
  number of awesome dinosaurs in that movie. ex:
  {
    'Jurassic Park': 5,
    'The Lost World: Jurassic Park': 8,
    'Jurassic Park III': 9,
    'Jurassic World': 11,
    'Jurassic World: Fallen Kingdom': 18
  } */
  countAwesomeDinosaurs() {

  },

  /* Return an object where each key is a movie director's name and each value is
      an object whose key is a movie's title and whose value is the average age
      of the cast on the release year of that movie. ex:
    {
      'Steven Spielberg':
        {
          'Jurassic Park': 34,
          'The Lost World: Jurassic Park': 37
        },
      'Joe Johnston':
        {
          'Jurassic Park III': 44
        },
      'Colin Trevorrow':
        {
          'Jurassic World': 56
         },
      'J. A. Bayona':
        {
          'Jurassic World: Fallen Kingdom': 59
        }
    }*/
  averageAgePerMovie() {

  },

  /* Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality. ex:
    [{
      name: 'Justin Duncan',
      nationality: 'Alien',
      imdbStarMeterRating: 0
    },
    {
      name: 'Karin Ohman',
      nationality: 'Chinese',
      imdbStarMeterRating: 0
    },
    {
      name: 'Tom Wilhoit',
      nationality: 'Kiwi',
      imdbStarMeterRating: 1
    }, {
      name: 'Jeo D',
      nationality: 'Martian',
      imdbStarMeterRating: 0
    }] */
  uncastActors() {

  },

  /* Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie. ex:
  [ 
    { name: 'Sam Neill', ages: [ 46, 54 ] },
    { name: 'Laura Dern', ages: [ 26, 34 ] },
    { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
    { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
    { name: 'Ariana Richards', ages: [ 14, 18 ] },
    { name: 'Joseph Mazello', ages: [ 10, 14 ] },
    { name: 'BD Wong', ages: [ 33, 55, 58 ] },
    { name: 'Chris Pratt', ages: [ 36, 39 ] },
    { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } 
  ] */
  actorsAgesInMovies() {

  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
