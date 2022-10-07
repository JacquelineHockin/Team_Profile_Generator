const Engineer = require("../lib/Engineer");

test("Engineer object test", function () {
  const testEngineer = new Engineer(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "testGithub"
  );
  expect(typeof testEngineer).toBe("object");
});

test("Engineer attribute name", function () {
  const testEngineer = new Engineer(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "testGithub"
  );
  expect(testEngineer.name).toBe("Herbert");
});

test("Engineer attribute id", function () {
  const testEngineer = new Engineer(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "testGithub"
  );
  expect(testEngineer.id).toBe(121);
});

test("Engineer email", function () {
  const testEngineer = new Engineer(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "testGithub"
  );
  expect(testEngineer.email).toBe("herbert@yahoo.com");
});

test("Engineer Get name", function () {
  const testEngineer = new Engineer(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "testGithub"
  );
  expect(testEngineer.getName()).toBe("Herbert");
});

test("Engineer getId", function () {
  const testEngineer = new Engineer(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "testGithub"
  );
  expect(testEngineer.getId()).toBe(121);
});

test("Engineer Get email", function () {
  const testEngineer = new Engineer(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "testGithub"
  );
  expect(testEngineer.getEmail()).toBe("herbert@yahoo.com");
});

test("Engineer Get role", function () {
  const testEngineer = new Engineer(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "testGithub"
  );
  expect(testEngineer.getRole()).toBe("Engineer");
});

test("Engineer Get GitHub", function () {
  const testEngineer = new Engineer(
    "Herbert",
    121,
    "herbert@yahoo.com",
    "testGithub"
  );
  expect(testEngineer.getGithub()).toBe("testGithub");
});
