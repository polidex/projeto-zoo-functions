const data = require('../data/zoo_data');

const species = data.species; 

function getSchedule(scheduleTarget) {
  // seu código aqui
}

function filterByAnimal(nomeAnimal) {
  return species.filter((specie) => specie.name === nomeAnimal);
}

console.log(filterByAnimal(`frogs`));

module.exports = getSchedule;
