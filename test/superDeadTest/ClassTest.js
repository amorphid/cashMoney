X_X("X_X.Class", function () {
  X_X("is an Object", function () {
    X_X(typeof X_X.Class).equals("object")
  });

  X_X("is a subclass of X_X.Object", function () {
    X_X(X_X.Class.__proto__).equals(X_X.Object)
  });
});
