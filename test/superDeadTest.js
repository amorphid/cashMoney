X_X("superDead", function () {
  X_X("is a function", function () {
    X_X(typeof superDead).equals("function");
  });

  X_X("throws error when called with 0 arguments",function () {
    funktion = function () {  X_X() };
    X_X(funktion).shouldThrowError();
  });

  X_X("throws error when called with 3+ arguments",function () {
    funktion = function () {  X_X(1, 2, 3) };
    X_X(funktion).shouldThrowError();
  });
});

X_X("X_X is equal to superDead", function () {
  X_X(X_X).equals(superDead);
});
