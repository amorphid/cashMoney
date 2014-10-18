X_X("X_X.Test", function () {
  X_X("is a function", function () {
    X_X(typeof X_X.Test).equals("function");
  });

  X_X("throws error w/ 0 inputs",function () {
    funktion = function () {  X_X.Test(); };
    X_X(funktion).shouldThrowError();
  });

  X_X("throws error w/ 2+ inputs",function () {
    funktion = function () {  X_X.Test(123, 456); };
    X_X(funktion).shouldThrowError();
  });

  X_X("returns an object w/ an Function input", function () {
    X_X(typeof X_X.Test(function () {})).equals("object");
  });

  X_X("returns an object w/ a NaN input", function () {
    X_X(typeof X_X.Test(NaN)).equals("object");
  });

  X_X("returns an object w/ a Null input", function () {
    X_X(typeof X_X.Test(null)).equals("object");
  });

  X_X("returns an object w/ a Number input", function () {
    X_X(typeof X_X.Test(123.456)).equals("object");
  });

  X_X("return an object w/ an Object input", function () {
    X_X(typeof X_X.Test({})).equals("object");
  });

  X_X("returns an object w/ a String input", function () {
    X_X(typeof X_X.Test("foo")).equals("object");
  });

  X_X("returns an object w/ an Undefined input", function () {
    X_X(typeof X_X.Test(undefined)).equals("object");
  });
});
