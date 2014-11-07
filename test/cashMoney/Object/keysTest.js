$_$("$_$.Object.keys", function () {
  $_$("returns an array", function () {
    var array = $_$.Object.keys();
    $_$(Array.isArray(array)).equals(true);
  });

  $_$("includes keys from parent class and subclass", function () {
    var klass    = Object.create($_$.Object);
    var subClass = Object.create(klass);
    var funktion = function (key) { return key === "foo" || key === "bar" };
    var preCount = subClass.keys().filter(funktion).length;
    klass.foo    = "foo";
    subClass.bar = "bar";
    $_$(subClass.keys().filter(funktion).length).equals(preCount + 2);
  });
});
