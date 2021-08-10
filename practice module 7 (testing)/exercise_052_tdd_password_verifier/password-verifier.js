// const passwordVerifier = function (conditions) {
//   //   const trueConditions = conditions.filter((bool) => bool);
//   const trueConditions = conditions.filter(Boolean);
//   //.filter(Boolean) removes values from a list which are falsey
//   if (trueConditions.length >= 3 && conditions[3] === true) {
//     return true;
//   } else {
//     return false;
//   }
// };

// module.exports = passwordVerifier;

// Utility functions
const isNotNull = function (password) {
  if (password !== null) {
    return true;
  } else {
    return false;
  }
};
const hasRightLength = function (password) {
  if (password.length < 9) {
    return true;
  } else {
    return false;
  }
};
const hasUpperCaseCharacter = function (password) {
  if (password.match(/[A-Z]/)) {
    return true;
  } else {
    return false;
  }
};
const hasLowerCaseCharacter = function (password) {
  if (password.match(/[a-z]/)) {
    return true;
  } else {
    return false;
  }
};
const hasDigit = function (password) {
  if (password.match(/[0-9]/)) {
    return true;
  } else {
    return false;
  }
};
const minimumConditionsReached = function (conditions) {
  //   const trueConditions = conditions.filter((bool) => bool);
  const trueConditions = conditions.filter(Boolean);
  //.filter(Boolean) removes values from a list which are falsey
  if (trueConditions.length >= 3) {
    return true;
  } else {
    return false;
  }
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
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
};
