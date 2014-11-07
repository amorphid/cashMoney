$_$("$_$.Error", function () {
  $_$("is a function", function () {
    $_$(typeof $_$.Error).equals("function");
  });

  $_$("should throw error", function () {
    var funktion = function () {
      $_$.Error(
        "ArgumentError",
        "Wrong number of arguments (0 for 1)"
      );
    };

    $_$(funktion).shouldThrowError();
  });
});
