$_$("$_$.Class", function () {
  $_$("is an Object", function () {
    $_$(typeof $_$.Class).equals("object")
  });

  $_$("is a subclass of $_$.Object", function () {
    $_$($_$.Class.__proto__).equals($_$.Object)
  });
});
