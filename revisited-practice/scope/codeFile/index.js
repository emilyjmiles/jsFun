const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';
    let person;

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // console.log('Log A:', personB);
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // console.log('Log B:', personC);
        }
      }

      personC = personA;
      // console.log('Log C:', personB);
    }

    changePerson();
    // console.log('Log D:', personA);

    const result = [
      { 'A': 'Ben' },
      { 'B': 'CardiB' },
      { 'C': 'CardiB' },
      { 'D': 'Paul' }
    ];

    return result;
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // console.log('Log A:', number);
      function newNumber() {
        number = 64;
        // console.log('Log B:', number);
      }

      newNumber();
      // console.log('Log C:', number);
    }

    numberFunction();
    // console.log('Log D:', number);

    const result = [
      { 'A': 75 },
      { 'B': 64 },
      { 'C': 64 },
      { 'D': 30 }
    ];

    return result;
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      let greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // console.log('Log A:', greeting);
      function newPhrase() {
        greeting = 'Hey';
        // console.log('Log B:', greeting);
      }

      newPhrase();
      // console.log('Log C:', greeting);
    }

    greetingFunction();
    // console.log('Log D:', greeting);

    const result = [
      { 'A': 'Yo' },
      { 'B': 'Hey' },
      { 'C': 'Hey' },
      { 'D': 'Hello' }
    ];

    return result;
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // console.log('Log A:', greeting);
      const newGreeting = () => {
        greeting = 'welcome';
        // console.log('Log B:', greeting);
      };

      newGreeting();
      // console.log('Log C:', greeting);
    };

    greetingGenerator();
    // console.log('Log D:', greeting);

    const result = [
      { 'A': 'hi' },
      { 'B': 'welcome' },
      { 'C': 'welcome' },
      { 'D': 'howdy' }
    ];

    return result;
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }
        // console.log('Log A:', name);
      }
      // console.log('Log B:', name);
    }
    // console.log('Log C:', name);

    sayName();
    // console.log('Log D:', name);

    const result = [
      { 'C': 'Brittany' },
      { 'A': 'Nathaniel' },
      { 'B': 'Nathaniel' },
      { 'D': 'Brittany' }
    ];

    return result;
  },

  exerciseF() {
    let dog = 'Spot';

    function petDog() {
      // console.log('Log A:', dog);

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // console.log('Log B:', dog);
        dog = 'Biscuit';
        // console.log('Log C:', dog);
      }

      rollOver();
      // console.log('Log D:', dog);
    }

    petDog();
    // console.log('Log E:', dog);

    const result = [
      { 'A': 'Spot' },
      { 'B': 'Spot' },
      { 'C': 'Biscuit' },
      { 'D': 'Biscuit' },
      { 'E': 'Biscuit' }
    ];

    return result;
  },

  exerciseG() {
    let fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        let fruit = 'mango';

        if (fruit) {
          // console.log('Log A:', fruit);
          // Error message: Cannot access 'fruit' before initialization
          const fruit = 'strawberry';
        }
        // console.log('Log B:', fruit);
      }
      // console.log('Log C:', fruit);
    }

    eatFruit();
    // console.log('Log D:', fruit);

    const result = [
      { 'A': 'reference error' },
      { 'B': 'mango' },
      { 'C': 'mango' },
      { 'D': 'apple' }
    ];

    return result;
  },

  exerciseH() {
    let num = 6;

    const fn1 = function () {
      let num = 4;
      // console.log('Log A:', num);

      if (num < 5) {
        let num = 9;
        fn2(num);

        const newNum = num;
        // console.log('Log B:', newNum);
      }

      newNum = num;
      // console.log('Log C:', newNum);
    };

    const fn2 = function (num) {
      // console.log('Log D:', num);
      num = num + 1;
      // console.log'Log E:', (num);
    };

    fn1();

    const result = [
      { 'A': 4 },
      { 'D': 9 },
      { 'E': 10 },
      { 'B': 9 },
      { 'C': 4 }
    ];

    return result;
  },

  exerciseI() {
    let hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // console.log('Log A:', hunger);
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // console.log('Log B:', hunger);
      }
      // console.log('Log C:', hunger);
    }

    eatSnack();

    hunger += 5;
    // console.log('Log D:', hunger);


    eatSnack();
    // console.log('Log E:', hunger);

    const result = [
      { 'A': 75 },
      { 'B': 0 },
      { 'C': 75 },
      { 'D': 80 },
      { 'A': 55 },
      { 'B': 0 },
      { 'C': 55 },
      { 'E': 55 }
    ];

    return result;
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';
    // console.log('Log A:', sandwich);

    const addChipotle = () => {
      // console.log('Log B:', toppings);
      // Error message: Cannot access 'toppings' before initialization
      let toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') {
        sandwich = 'not a mediocre sandwich';
      }
      // console.log('Log C:', sandwich);
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // console.log('Log D:', cheeseTopping);

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // console.log('Log E:', sandwich);
    // console.log('Log F:', amandaBynes);

    const result = [
      { 'A': 'ketchup sandwich' },
      { 'D': 'gouda' },
      { 'B': undefined },
      { 'C': 'not a mediocre sandwich' },
      { 'E': 'not a mediocre sandwich' },
      { 'F': 'National Treasure' }
    ];

    return result;
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // console.log('Log A:', num);
    }

    foo();
    // console.log('Log B:', num);

    const result = [
      { 'A': 7 },
      { 'B': 7 }
    ];

    return result;
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }
        // console.log('Log A:', grade);
      }

      addPoints();
      // console.log('Log B:', grade);
    }

    losePoints();
    // console.log('Log C:', grade);

    const result = [
      { 'A': 95 },
      { 'B': 90 },
      { 'C': 90 }
    ];

    return result;
  },

  exerciseM() {
    let num = 5;

    function first() {
      // console.log('Log A:', num);
      num = 6;
      // console.log('Log B:', num);
    }

    function second() {
      // console.log('Log C:', num);
      // Error message: Cannot access 'toppings' before initialization
      let num = 7;
    }

    first();
    second();
    // console.log('Log D:', num);

    const result = [
      { 'A': 5 },
      { 'B': 6 },
      { 'C': 'reference error' },
      { 'D': 6 }
    ];

    return result;
  },

  exerciseN() {
    let instructor = 'Pam';

    function changeInstructor() {
      // console.log('Log A:', instructor);

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }
      // console.log('Log B:', instructor);

      function rename() {
        instructor = 'Louisa';
        // console.log('Log C:', instructor);
      }

      rename();
      // console.log('Log D:', instructor);
    }

    // console.log('Log E:', instructor);
    changeInstructor();
    // console.log('Log F:', instructor);

    const result = [
      { 'E': 'Pam' },
      { 'A': 'Pam' },
      { 'B': 'Pam' },
      { 'C': 'Louisa' },
      { 'D': 'Louisa' },
      { 'F': 'Louisa' }
    ];

    return result;
  },

  exerciseO() {
    let shoe = 'flipflop';

    function putOnShoe() {
      // console.log('Log A:', shoe);
      // Error message: Cannot access 'toppings' before initialization
      let shoe = 'boot';
    }

    // console.log('Log B:', shoe);
    putOnShoe();
    // console.log('Log C:', shoe);

    const result = [
      { 'B': 'flipflop' },
      { 'A': undefined },
      { 'C': 'flipflop' }
    ];

    return result;
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // console.log('Log A:', lunch);
        // lunch is declared but not defined yet so nothing logs here
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }
      // console.log('Log B:', lunch);
    }

    orderLunch();
    // console.log('Log C:', lunch);

    const result = [
      { 'B': 'soup' },
      { 'C': 'soup' }
    ];

    return result;
  },

  exerciseQ() {
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // console.log('Log A:', kid);
      wildKids.push(kid);
      // console.log('Log B:', wildKids);

      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // console.log('Log C:', myKid);

        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // console.log('Log D:', myKid);

        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // console.log('Log E:', myKid);

      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = [
      { 'A': 'Pandora' },
      { 'B': ['Antigone', 'Pandora'] },
      { 'C': 'Mandy' },
      { 'D': 'Antigone' },
      { 'E': 'Pandora' }
    ];

    return result;
  },

  exerciseR() {
    let myName = 'Rody';
    // console.log('Log A:', myName);

    const parentFunc = () => {
      myName += 'Toy';
      // console.log('Log B:', myName);

      let innerFunc = () => {
        let myName = 'Tesla';
        // console.log('Log C:', myName);
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // console.log('Log D:', myName);

    const result = [
      { 'A': 'Rody' },
      { 'B': 'RodyToy' },
      { 'C': 'Tesla' },
      { 'D': 'RodyToyDaniels' }
    ];

    return result;
  }
};

module.exports = scope;