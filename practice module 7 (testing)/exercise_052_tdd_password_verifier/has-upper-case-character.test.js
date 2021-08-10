const hasUpperCaseCharacter = require("./has-upper-case-character.js");

test("includes 1 or more uppercase characters", function () {
  const myPassword = "HENKhenk";
  expect(hasUpperCaseCharacter(myPassword)).toBe(true);
});

test("includes 0 uppercase characters", function () {
  const myPassword = "henkhenk";
  expect(hasUpperCaseCharacter(myPassword)).toBe(false);
});
