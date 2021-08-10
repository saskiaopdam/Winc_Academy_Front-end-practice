const minimumConditionsReached = require("./minimum-conditions-reached.js");

test("3 or more conditions met", function () {
  const conditions = [true, true, true, false, false];
  expect(minimumConditionsReached(conditions)).toBe(true);
});

test("less than 3 conditions met", function () {
  const conditions = [true, true, false, false, false];
  expect(minimumConditionsReached(conditions)).toBe(false);
});
