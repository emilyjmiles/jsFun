const { characters, weapons } = require('../datasets/ultima');

const ultimaPrompts = {
  // Return the sum of the amount of damage for all the weapons that our characters can use
  // Answer => 113
  totalDamage() {
    return characters.reduce((total, character) => {
      character.weapons.forEach(weapon => {
        total += weapons[weapon].damage;
      });

      return total;
    }, 0);
  },

  // Return the sum damage and total range for each character as an object.
  // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}
  charactersByTotal() {
    return characters.reduce((list, character) => {
      let damage = 0;
      let range = 0;

      character.weapons.forEach(weapon => {
        damage += weapons[weapon].damage;
        range += weapons[weapon].range;
      });

      list.push({
        [character.name]: {
          damage: damage,
          range: range
        }
      });

      return list;
    }, []);
  },
};

module.exports = ultimaPrompts;