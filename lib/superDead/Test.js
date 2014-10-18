X_X.Test = function (something) {
  var args = arguments;

  if (args.length !== 1) {
    var e     = Error();
    e.name    = "ArgumentError:  "
    e.message = "Wrong number of arguments (" + args.length + " for 1)"
    throw e;
  };

  var object = {};

  if (typeof something === "function") {
    object.shouldThrowError = X_X.Test.shouldThrowError(something);
  };

  object.equals = X_X.Test.equals(something)

  return object;
};
