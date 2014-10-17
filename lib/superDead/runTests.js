X_X.runTests = function (stack) {
  var array = stack.splice(0);

  array.forEach(function (test) {
    var result = test.funktion();

    if (typeof result === "function") {
      test.result = result;
    } else {
      test.tests = X_X.stack.splice(0);

      test.tests.forEach(function (test) {
        if (typeof test.result !== "function") {
          X_X.stack.push(test);
        };
      });

      X_X.runTests(X_X.stack);
    };
  });
};
