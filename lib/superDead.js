function superDead (string, funktion) {
  var result = funktion();

  if (result) {
    console.log(string + ": " + result.toString());
  };
};

var X_X = superDead;

X_X.shouldThrowError = function () {};
