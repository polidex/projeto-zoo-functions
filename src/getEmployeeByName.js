const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const firstName = data.employees.map((employee) => employee.firstName);
  const lastName = data.employees.map((employee) => employee.lastName);
  const checkName = () => firstName || lastName === employeeName;
  const result = data.employees.reduce((checkName), {});
  return result;
  // return checkName;
}
console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
