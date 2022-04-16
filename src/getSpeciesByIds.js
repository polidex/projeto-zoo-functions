const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = ids.map((id) => data.species.filter((specie) => specie.id === id));
  return result.reduce((idA, idB) => [...idA, ...idB], []);
}
module.exports = getSpeciesByIds;
