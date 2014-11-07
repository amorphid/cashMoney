$_$("cashMoney", function () {
  $_$("is a function", function () {
    $_$(typeof cashMoney).equals("function");
  });

  $_$("throws error when called with 0 arguments",function () {
    funktion = function () {  $_$() };
    $_$(funktion).shouldThrowError();
  });

  $_$("throws error when called with 3+ arguments",function () {
    funktion = function () {  $_$(1, 2, 3) };
    $_$(funktion).shouldThrowError();
  });
});

$_$("$_$ is equal to cashMoney", function () {
  $_$($_$).equals(cashMoney);
});
