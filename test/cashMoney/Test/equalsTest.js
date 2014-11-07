$_$("$_$.Test.equals", function () {
  $_$("is a function", function () {
    $_$(typeof $_$.Test.equals).equals("function");
  });

  $_$("returns true if inputs are equal", function () {
    $_$(123).equals(123);
  });

  $_$("throws error when called with 0 arguments",function () {
    funktion = function () {  $_$(123).equals() };
    $_$(funktion).shouldThrowError();
  });

  $_$("throws error when called with 2+ arguments",function () {
    funktion = function () {  $_$(123).equals(456, 789) };
    $_$(funktion).shouldThrowError();
  });
});
