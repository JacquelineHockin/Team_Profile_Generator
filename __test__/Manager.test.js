const Manager = require("../lib/Manager");

test("Manager object test", function () {
  const testManager = new Manager(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "OFFNUM1244"
  );
  expect(typeof testManager).toBe("object");
});

test("Manager attribute name", function () {
  const testManager = new Manager(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "OFFNUM1244"
  );
  expect(testManager.name).toBe("Herbert");
});

test("Manager attribute id", function () {
  const testManager = new Manager(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "OFFNUM1244"
  );
  expect(testManager.id).toBe(121);
});

test("Manager email", function () {
  const testManager = new Manager(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "OFFNUM1244"
  );
  expect(testManager.email).toBe("herbert@yahoo.com");
});

test("Manager Get name", function () {
  const testManager = new Manager(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "OFFNUM1244"
  );
  expect(testManager.getName()).toBe("Herbert");
});

test("Manager getId", function () {
  const testManager = new Manager(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "OFFNUM1244"
  );
  expect(testManager.getId()).toBe(121);
});

test("Manager Get email", function () {
  const testManager = new Manager(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "OFFNUM1244"
  );
  expect(testManager.getEmail()).toBe("herbert@yahoo.com");
});

test("Manager Get role", function () {
  const testManager = new Manager(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "OFFNUM1244"
  );
  expect(testManager.getRole()).toBe("Manager");
});

test("Manager Get GitHub", function () {
  const testManager = new Manager(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "OFFNUM1244"
  );
  expect(testManager.getOfficeNumber()).toBe("OFFNUM1244");
});
