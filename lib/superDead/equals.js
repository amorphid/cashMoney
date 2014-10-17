X_X.equals = function () {
  return function (postcondition) {
    return this.precondition === postcondition;
  };
};
