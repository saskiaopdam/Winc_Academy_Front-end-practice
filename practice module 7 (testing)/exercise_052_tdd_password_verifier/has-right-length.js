const hasRightLength = function (password) {
  if (password.length < 9) {
    return true;
  } else {
    return false;
  }
};

module.exports = hasRightLength;
