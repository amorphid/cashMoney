X_X.Test = function (something) {
  var object = {};

  if (typeof something === "function") {
    object.shouldThrowError = X_X.shouldThrowError(something);
  };

  object.equals = X_X.equals(something);

  return object;
};
