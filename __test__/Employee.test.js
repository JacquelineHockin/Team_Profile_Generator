const Employee = require("../lib/Employee");

test("Employee object test", function () {
  const testEmployee = new Employee("Herbert", 121, "herbert@yahoo.com");
  expect(typeof testEmployee).toBe("object");
});

test("Employee attribute name", function () {
  const testEmployee = new Employee("Herbert", 121, "herbert@yahoo.com");
  expect(testEmployee.name).toBe("Herbert");
});

test("Employee attribute id", function () {
  const testEmployee = new Employee("Herbert", 121, "herbert@yahoo.com");
  expect(testEmployee.id).toBe(121);
});

test("Employee email", function () {
  const testEmployee = new Employee("Herbert", 121, "herbert@yahoo.com");
  expect(testEmployee.email).toBe("herbert@yahoo.com");
});

test("Employee Get name", function () {
  const testEmployee = new Employee("Herbert", 121, "herbert@yahoo.com");
  expect(testEmployee.getName()).toBe("Herbert");
});

test("Employee getId", function () {
  const testEmployee = new Employee("Herbert", 121, "herbert@yahoo.com");
  expect(testEmployee.getId()).toBe(121);
});

test("Employee Get email", function () {
  const testEmployee = new Employee("Herbert", 121, "herbert@yahoo.com");
  expect(testEmployee.getEmail()).toBe("herbert@yahoo.com");
});

test("Employee Get role", function () {
  const testEmployee = new Employee("Herbert", 121, "herbert@yahoo.com");
  expect(testEmployee.getRole()).toBe("Employee");
});
