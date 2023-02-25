const { bosses, sidekicks } = require('../datasets/bosses');

const bossPrompts = {
  // Create an array of objects that each have the name of the boss and the sum loyalty of all their sidekicks.
  // ex: [
  //   { bossName: 'Jafar', sidekickLoyalty: 3 },
  //   { bossName: 'Ursula', sidekickLoyalty: 20 },
  //   { bossName: 'Scar', sidekickLoyalty: 16 }
  // ]
  bossLoyalty() {
    const keys = Object.keys(bosses);

    return keys.reduce((list, key) => {
      let loyalty = 0;

      sidekicks.forEach(sidekick => {
        bosses[key].sidekicks.forEach(element => {
          if (sidekick.name === element.name) {
            loyalty += sidekick.loyaltyToBoss;
          };
        });
      });

      list.push({
        bossName: bosses[key].name,
        sidekickLoyalty: loyalty
      });

      return list;
    }, []);
  }
};

module.exports = bossPrompts;
