X_X("X_X.Test.equals", function () {
  X_X("is a function", function () {
    X_X(typeof X_X.Test.equals).equals("function");
  });

  X_X("returns true if inputs are equal", function () {
    X_X(123).equals(123);
  });

  X_X("throws error when called with 0 arguments",function () {
    funktion = function () {  X_X(123).equals() };
    X_X(funktion).shouldThrowError();
  });

  X_X("throws error when called with 2+ arguments",function () {
    funktion = function () {  X_X(123).equals(456, 789) };
    X_X(funktion).shouldThrowError();
  });
});
