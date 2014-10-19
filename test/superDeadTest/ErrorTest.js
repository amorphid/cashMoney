X_X("X_X.Error", function () {
  X_X("is a function", function () {
    X_X(typeof X_X.Error).equals("function");
  });

  X_X("should throw error", function () {
    var funktion = function () {
      X_X.Error(
        "ArgumentError",
        "Wrong number of arguments (0 for 1)"
      );
    };

    X_X(funktion).shouldThrowError();
  });
});
