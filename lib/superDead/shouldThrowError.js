X_X.shouldThrowError = function (funktion) {
  return function () {
    try {
      funktion()
    } catch (err) {
      return true;
    };

    return false;
  };
};
