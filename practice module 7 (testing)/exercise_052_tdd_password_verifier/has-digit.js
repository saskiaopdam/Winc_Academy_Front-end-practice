const hasDigit = function (password) {
  if (password.match(/[0-9]/)) {
    return true;
  } else {
    return false;
  }
};

module.exports = hasDigit;
