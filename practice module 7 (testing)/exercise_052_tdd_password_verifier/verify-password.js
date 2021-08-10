const verifyPassword = function (conditions) {
  //   const trueConditions = conditions.filter((bool) => bool);
  const trueConditions = conditions.filter(Boolean);
  //.filter(Boolean) removes values from a list which are falsey
  if (trueConditions.length >= 3 && conditions[3] === true) {
    return true;
  } else {
    return false;
  }
};

module.exports = verifyPassword;
// onduidelijk: eerst nog test voor deze functie schrijven, of testen hiervoor in algemene password-verifier.test zetten?

// const conditions = [
//   isNotNull(password),
//   hasRightLength(password),
//   hasUpperCaseCharacter(password),
//   hasLowerCaseCharacter(password),
//   hasDigit(password),
// ];
// const result =
//   minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

// return result;
