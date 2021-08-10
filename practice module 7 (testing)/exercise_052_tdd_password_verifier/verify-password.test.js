const verifyPassword = require("./verify-password.js");

test("3 or more conditions & condition 4 met", function () {
  const conditions = [true, true, false, true, false];
  expect(verifyPassword(conditions)).toBe(true);
});

test("3 or more conditions || condition 4 not met", function () {
  const conditions = [true, true, true, false, false];
  expect(verifyPassword(conditions)).toBe(false);
});
