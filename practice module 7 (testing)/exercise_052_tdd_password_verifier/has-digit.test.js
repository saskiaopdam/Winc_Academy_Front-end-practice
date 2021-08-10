const hasDigit = require("./has-digit.js");

test("includes 1 or more digits", function () {
  const myPassword = "HENKhenk1";
  expect(hasDigit(myPassword)).toBe(true);
});

test("includes 0 digits", function () {
  const myPassword = "HENKHENK";
  expect(hasDigit(myPassword)).toBe(false);
});
