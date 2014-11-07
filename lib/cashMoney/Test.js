$_$.Test = function (something) {
  var args = arguments;

  if (args.length !== 1) {
    $_$.Error(
      "ArgumentError",
      "Wrong number of arguments (" + args.length + " for 1)"
    );
  };

  var object = {};

  if (typeof something === "function") {
    object.shouldThrowError = $_$.Test.shouldThrowError(something);
  };

  object.equals = $_$.Test.equals(something)

  return object;
};
