const data = require('../data/zoo_data');
const emps = data.employees;

function getEmployeeByName(empName) {
  const result = emps.find((emp) => emp.firstName === empName || emp.lastName === empName);
  return !result ? {} : result;
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
