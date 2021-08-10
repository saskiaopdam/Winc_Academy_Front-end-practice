const isNotNull = function (password) {
  if (password !== null) {
    return true;
  } else {
    return false;
  }
};

module.exports = isNotNull;
