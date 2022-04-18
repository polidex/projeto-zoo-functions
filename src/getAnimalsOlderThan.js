const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalName = data.species.find((specie) => specie.name === animal);
  return animalName.residents.every((resident) => resident.age > age);
}
module.exports = getAnimalsOlderThan;
