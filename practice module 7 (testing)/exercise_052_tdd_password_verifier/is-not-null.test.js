const isNotNull = require("./is-not-null.js");

test("is not null", function () {
  const myPassword = !null;
  expect(isNotNull(myPassword)).toBe(true);
});

test("is null", function () {
  const myPassword = null;
  expect(isNotNull(myPassword)).toBe(false);
});
