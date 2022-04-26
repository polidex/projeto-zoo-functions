const data = require('../data/zoo_data');

const species = data.species; 
const hours = data.hours;

function getSchedule(scheduleTarget) {
  // seu código aqui
}

function findAnimal(nomeAnimal) {
  const animal = species.find((specie) => specie.name === nomeAnimal);
  return animal.availability;
}

function findWeekDay(weekDay) {
  //linha 17: como filtrar um array dentro de um array e pke filtro dentro do filtro nao deu certo. pesqusiar includes.
  const animals = species.filter((specie) => specie.availability.filter((day) => day === weekDay))
  const seioq = { [weekDay]: {
    officeHour: `Open from ${hours[weekDay].open}am until ${hours[weekDay].close}pm`,
    exhibition: 'test',
  }}
  return animals; //hours[weekDay];
}

console.log(findWeekDay('Wednesday'));

module.exports = getSchedule;
