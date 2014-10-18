X_X("X_X.Test", function () {
  X_X("is a function", function () {
    X_X(typeof X_X.Test).equals("function");
  });

  X_X("returns an object w/ a string input", function () {
    X_X(typeof X_X.Test("foo")).equals("object");
  });

  X_X("returns an object w/ a number input", function () {
    X_X(typeof X_X.Test(123.456)).equals("object");
  });

  X_X("returns an object w/ an object input", function () {
    X_X(typeof X_X.Test(function () {})).equals("object");
  });

  X_X("returns an object w/ a null input", function () {
    X_X(typeof X_X.Test(null)).equals("object");
  });

  X_X("return an object w/ a string input", function () {
    X_X(typeof X_X.Test("foo")).equals("object");
  });

  X_X("returns an object w/ an undefined input", function () {
    X_X(typeof X_X.Test(undefined)).equals("object");
  });

  X_X("returns an object w/ a NaN input", function () {
    X_X(typeof X_X.Test(NaN)).equals("object");
  });

  X_X("return an object w/ an objecg input", function () {
    X_X(typeof X_X.Test({})).equals("object");
  });
});
