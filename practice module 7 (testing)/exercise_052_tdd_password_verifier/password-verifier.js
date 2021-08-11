// Utility functions

// 1. password is korter dan 9 karakters
const hasRightLength = (string) => string.length < 9;
// 2. password is niet null
const isNotNull = (string) => string !== null;
// 3. password heeft 1 of meer uppercase karakters
const hasUpperCaseCharacter = (string) => /[A-Z]/.test(string);
// 4. password heeft 1 of meer lowercase karakters
const hasLowerCaseCharacter = (string) => /[a-z]/.test(string);
// 5. password heeft 1 of meer cijfers
const hasDigit = (string) => /[0-9]/.test(string);
// const hasDigit = (string) => /\d/.test(string);

// 6. ten minste 3 van deze condities zijn true
const minimumConditionsReached = (conditions) => {
  //   const trueConditions = conditions.filter((bool) => bool);
  const trueConditions = conditions.filter(Boolean);
  //.filter(Boolean) removes values from a list which are falsey
  return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = (password) => {
  const conditions = [
    isNotNull(password),
    hasRightLength(password),
    hasUpperCaseCharacter(password),
    hasLowerCaseCharacter(password),
    hasDigit(password),
  ];
  const result =
    minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

  return result;
};

module.exports = {
  verifyPassword, // verifyPassword is not defined
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
};
