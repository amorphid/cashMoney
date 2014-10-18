X_X.Test.equals = function (precondition) {
  return function (postcondition) {
    X_X.testToRun = function () {
      return precondition === postcondition;
    };
  };
};
