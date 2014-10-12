function superDead (string, funktion) {
  X_X.stack.push(string);
  X_X.result = funktion();

  if (typeof X_X.result === "boolean") {
    X_X.stack.push(X_X.result);
  };
};

var X_X = superDead;

X_X.stack = [];

X_X.testCount = function () {
  var arr = X_X.stack.filter(function (i) { return i === true; });
  return arr.length;
};

X_X.tests = [];

X_X.runTests = function () {
  var count = X_X.testCount();

  for (var i = 0; i < count; i += 1) {
    X_X.index    = X_X.stack.indexOf(true);
    X_X.lastTest = X_X.tests[X_X.tests.length - 1];

    if (!X_X.lastTest) {
      X_X.test  = X_X.stack.slice(0, X_X.index + 1);
      X_X.stack = X_X.stack.slice(X_X.test.length);
    } else {
      X_X.part2 = X_X.stack.slice(0, X_X.stack.indexOf(true) + 1);
      X_X.part1 = X_X.lastTest.slice(0, X_X.lastTest.length - X_X.part2.length);
      X_X.test  = Array.prototype.concat(X_X.part1, X_X.part2);
      X_X.stack = X_X.stack.slice(X_X.stack.indexOf(true) + 1);
    };

    X_X.tests.push(X_X.test);
  };

  console.log(X_X.tests);
};
