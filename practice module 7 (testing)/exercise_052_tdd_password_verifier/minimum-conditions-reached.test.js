const minimumConditionsReached = require("./minimum-conditions-reached.js");

test("minimumConditionsReached, true", () => {
  const conditions = [true, true, true, false, false];
  expect(minimumConditionsReached(conditions)).toBe(true);
});

test("minimumConditionsReached, false", () => {
  const conditions = [true, true, false, false, false];
  expect(minimumConditionsReached(conditions)).toBe(false);
});

// test("minimumConditionsReached, over cutoff", () => {
//   const conditions = [true, true, true, true, false];
//   expect(minimumConditionsReached(conditions)).toBe(true);
// });

// test("minimumConditionsReached, on cutoff", () => {
//   const conditions = [true, true, true, false, false];
//   expect(minimumConditionsReached(conditions)).toBe(true);
// });

// test("minimumConditionsReached, under cutoff", () => {
//   const conditions = [true, true, false, false, false];
//   expect(minimumConditionsReached(conditions)).toBe(false);
// });

// test("minimumConditionsReached, all conditions false", () => {
//   const conditions = [false, false, false, false, false];
//   expect(minimumConditionsReached(conditions)).toBe(false);
// });
