X_X.Test = function (something) {
  var object = Object.create(X_X.Test.prototype);

  if (typeof something === "function") {
    object.shouldThrowError = X_X.Test.shouldThrowError(something);
  };

  object.equals = X_X.Test.equals(something)

  return object;
};
