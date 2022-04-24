const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = entrants.reduce((acc, subject) => {
    if (subject.age < 18) {
      acc.child += 1;
    } else if (subject.age >= 18 && subject.age < 50) {
      acc.adult += 1;
    } else if (subject.age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return result;
}

function calculateEntry(entrants = {}) {
  if (Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  const price = data.prices;
  const sum = child * price.child + adult * price.adult + senior * price.senior;
  return sum;
}

module.exports = { calculateEntry, countEntrants };

//  Referências - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys;
