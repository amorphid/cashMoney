X_X("X_X.Test.shouldThrowError", function () {
  X_X("is a function", function () {
    X_X(typeof X_X.Test.shouldThrowError).equals("function");
  });

  X_X("throws error 1+ inputs",function () {
    funktion = function () {
      X_X(function () {}).shouldThrowError(123)
    };

    X_X(funktion).shouldThrowError();
  });
});
