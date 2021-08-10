const passwordVerifier = function (conditions) {
  //   const trueConditions = conditions.filter((bool) => bool);
  const trueConditions = conditions.filter(Boolean);
  //.filter(Boolean) removes values from a list which are falsey
  if (trueConditions.length >= 3 && conditions[3] === true) {
    return true;
  } else {
    return false;
  }
};

module.exports = passwordVerifier;
