const data = require('../data/zoo_data');

const animals = data.species;

function nomeAnimais(residents, sex) {
  let result = [];
  if (sex === undefined) {
    result = residents.map((resident) => resident.name);
  }
  if (sex !== undefined) {
    result = residents.reduce((acc, resident) => {
      if (resident.sex === sex) {
        acc.push(resident.name);
      }
      return acc;
    }, []);
  }
  return result;
}

function isSorted(listAnimais, sorted) {
  if (sorted) {
    return listAnimais.sort();
  }
  return listAnimais;
}
function semParametro() {
  const geografico = { NE: [], NW: [], SE: [], SW: [] };
  animals.map((animal) => {
    if (animal.location === 'NE') geografico.NE.push(animal.name);
    if (animal.location === 'NW') geografico.NW.push(animal.name);
    if (animal.location === 'SE') geografico.SE.push(animal.name);
    if (animal.location === 'SW') geografico.SW.push(animal.name);
    return true;
  });
  return geografico;
}

function comParametro(options) {
  const geografico = { NE: [], NW: [], SE: [], SW: [] };

  animals.map((animal) => {
    const nomeAnimaisList = isSorted(nomeAnimais(animal.residents, options.sex), options.sorted);
    if (animal.location === 'NE') geografico.NE.push({ [animal.name]: nomeAnimaisList });
    if (animal.location === 'NW') geografico.NW.push({ [animal.name]: nomeAnimaisList });
    if (animal.location === 'SE') geografico.SE.push({ [animal.name]: nomeAnimaisList });
    if (animal.location === 'SW') geografico.SW.push({ [animal.name]: nomeAnimaisList });
    return true;
  });
  return geografico;
}

function getAnimalMap(options) {
  return !options || !options.includeNames ? semParametro() : comParametro(options);
}

module.exports = getAnimalMap;
