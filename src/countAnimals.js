const data = require('../data/zoo_data');

function countAnimals(animal = {}) {
  const defaultResult = {};

  if (animal.specie && animal.sex) {
    const subject = data.species.find((specie) => specie.name === animal.specie);
    const result = subject.residents.filter((creature) => creature.sex === animal.sex);
    return result.length;
  }
  if (animal.specie) {
    const subject = data.species.find((specie) => specie.name === animal.specie);
    return subject.residents.length;
  }
  data.species.forEach((specie) => { defaultResult[specie.name] = specie.residents.length; });
  return defaultResult;
}

console.log(countAnimals());
module.exports = countAnimals;
