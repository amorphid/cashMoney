$_$("$_$.ArgumentsValidation", function () {
  $_$("is a function", function () {
    $_$(typeof $_$.ArgumentsValidation).equals("function");
  });

  // $_$("returns an object", function () {
  //   var args = {
  //     args: { a: 1, b: 2 },
  //     count: 2
  //   };

  //   $_$(typeof $_$.ArgumentsValidation(args)).equals("object");
  // });

  // $_$("throws error w/ 0 inputs",function () {
  //   funktion = function () {  $_$.Test(); };
  //   $_$(funktion).shouldThrowError();
  // });

  // $_$("throws error w/ 0 inputs",function () {
  //   funktion = function () {  $_$.Test(); };
  //   $_$(funktion).shouldThrowError();
  // });
});
