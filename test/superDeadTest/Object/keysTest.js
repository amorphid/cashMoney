X_X("X_X.Object.keys", function () {
  X_X("returns an array", function () {
    var array = X_X.Object.keys();
    X_X(Array.isArray(array)).equals(true);
  });

  X_X("includes keys from parent class and subclass", function () {
    var klass    = Object.create(X_X.Object);
    var subClass = Object.create(klass);
    var funktion = function (key) { return key === "foo" || key === "bar" };
    var preCount = subClass.keys().filter(funktion).length;
    klass.foo    = "foo";
    subClass.bar = "bar";
    X_X(subClass.keys().filter(funktion).length).equals(preCount + 2);
  });
});
