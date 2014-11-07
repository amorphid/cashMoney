$_$("$_$.Test.shouldThrowError", function () {
  $_$("is a function", function () {
    $_$(typeof $_$.Test.shouldThrowError).equals("function");
  });

  $_$("throws error 1+ inputs",function () {
    funktion = function () {
      $_$(function () {}).shouldThrowError(123)
    };

    $_$(funktion).shouldThrowError();
  });
});
