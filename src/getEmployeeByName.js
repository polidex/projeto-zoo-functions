const data = require('../data/zoo_data');

function getEmployeeByName(employeeName = {}) {
  const result = data.employees.find(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  );
  return !result ? {} : result;
}
console.log(getEmployeeByName('Orloff'));
module.exports = getEmployeeByName;
