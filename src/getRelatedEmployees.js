const data = require('../data/zoo_data');

function isManager(id) {
  const checkManager = data.employees.map((employee) => employee.managers);
  return checkManager? 
}

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
