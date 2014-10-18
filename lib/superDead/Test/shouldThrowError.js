X_X.Test.shouldThrowError = function (funktion) {
  return function () {
    X_X.testToRun = function () {
      try {
        funktion();
      } catch (err) {
        return true;
      };

      return false;
    };
  };
};
