const hasRightLength = require("./has-right-length.js");

test("has less than 9 characters", function () {
  const myPassword = "12345678";
  expect(hasRightLength(myPassword)).toBe(true);
});

test("has 9 or more characters", function () {
  const myPassword = "123456789";
  expect(hasRightLength(myPassword)).toBe(false);
});
