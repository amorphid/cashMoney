X_X("X_X.Test.shouldThrowError", function () {
  X_X("is a function", function () {
    X_X(typeof X_X.Test.shouldThrowError).equals("function");
  });

  X_X("throws error when called with 1+ arguments",function () {
    funktion = function () {
      X_X(function () {}).shouldThrowError(123)
    };

    X_X(funktion).shouldThrowError();
  });
});
