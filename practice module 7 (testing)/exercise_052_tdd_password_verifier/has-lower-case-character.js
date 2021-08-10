const hasLowerCaseCharacter = function (password) {
  if (password.match(/[a-z]/)) {
    return true;
  } else {
    return false;
  }
};

module.exports = hasLowerCaseCharacter;
