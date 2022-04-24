const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstManaged = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const specieObj = data.species.find((specie) => specie.id === firstManaged);
  const isOlder = specieObj.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(isOlder);
}

module.exports = getOldestFromFirstSpecies;
