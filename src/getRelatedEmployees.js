const data = require('../data/zoo_data');

const empregados = data.employees;

function isManager(id) {
  let result = false;
  empregados.map((person) => {
    if (person.managers.includes(id)) {
      result = true;
    }
    return result;
  });
  return result;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const subordinate = [];
    empregados.map((person) => {
      if (person.managers.includes(managerId)) {
        subordinate.push(`${person.firstName} ${person.lastName}`);
      }
      return subordinate;
    });
    return subordinate;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
