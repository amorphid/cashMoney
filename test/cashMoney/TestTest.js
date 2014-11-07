$_$("$_$.Test", function () {
  $_$("is a function", function () {
    $_$(typeof $_$.Test).equals("function");
  });

  $_$("throws error w/ 0 inputs",function () {
    funktion = function () {  $_$.Test(); };
    $_$(funktion).shouldThrowError();
  });

  $_$("throws error w/ 2+ inputs",function () {
    funktion = function () {  $_$.Test(123, 456); };
    $_$(funktion).shouldThrowError();
  });

  $_$("returns an object w/ an Function input", function () {
    $_$(typeof $_$.Test(function () {})).equals("object");
  });

  $_$("returns an object w/ a NaN input", function () {
    $_$(typeof $_$.Test(NaN)).equals("object");
  });

  $_$("returns an object w/ a Null input", function () {
    $_$(typeof $_$.Test(null)).equals("object");
  });

  $_$("returns an object w/ a Number input", function () {
    $_$(typeof $_$.Test(123.456)).equals("object");
  });

  $_$("return an object w/ an Object input", function () {
    $_$(typeof $_$.Test({})).equals("object");
  });

  $_$("returns an object w/ a String input", function () {
    $_$(typeof $_$.Test("foo")).equals("object");
  });

  $_$("returns an object w/ an Undefined input", function () {
    $_$(typeof $_$.Test(undefined)).equals("object");
  });
});
