const hasUpperCaseCharacter = function (password) {
  if (password.match(/[A-Z]/)) {
    return true;
  } else {
    return false;
  }
};

module.exports = hasUpperCaseCharacter;
