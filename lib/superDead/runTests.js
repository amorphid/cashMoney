X_X.runTests = function (stack) {
  var array = stack.splice(0);

  array.forEach(function (test) {
    var result = test.funktion()

    if (X_X.testToRun) {
      test.result = X_X.testToRun;
      X_X.testToRun = undefined;
    } else {
      test.tests = X_X.Stack.splice(0);

      test.tests.forEach(function (test) {
        if (typeof test.result !== "function") {
          X_X.Stack.push(test);
        };
      });

      X_X.runTests(X_X.Stack);
    };
  });
};
