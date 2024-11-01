function updateEmployeeSalary(employees, employeeId, newSalary) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === employeeId) {
      employees[i].salary = newSalary;
      return employees[i];
    }
  }
  return null;
}

const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    salary: 70000,
    department: { name: "Engineering", location: "New York" },
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    salary: 80000,
    department: { name: "Product", location: "San Francisco" },
  },
];

console.log(updateEmployeeSalary(employees, 3, 75000));
