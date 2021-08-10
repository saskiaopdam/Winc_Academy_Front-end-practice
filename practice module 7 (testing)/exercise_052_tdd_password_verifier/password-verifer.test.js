const passwordVerifier = require("./password-verifier.js");

test("3 or more conditions & condition 4 met", function () {
  const conditions = [true, true, false, true, false];
  expect(passwordVerifier(conditions)).toBe(true);
});

test("3 or more conditions || condition 4 not met", function () {
  const conditions = [true, true, true, false, false];
  expect(passwordVerifier(conditions)).toBe(false);
});
