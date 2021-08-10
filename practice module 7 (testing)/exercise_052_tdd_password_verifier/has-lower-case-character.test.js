const hasLowerCaseCharacter = require("./has-lower-case-character.js");

test("includes 1 or more lowercase characters", function () {
  const myPassword = "HENKhenk";
  expect(hasLowerCaseCharacter(myPassword)).toBe(true);
});

test("includes 0 lowercase characters", function () {
  const myPassword = "HENKHENK";
  expect(hasLowerCaseCharacter(myPassword)).toBe(false);
});
