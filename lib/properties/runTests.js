X_X.runTests = function (stack) {
  var stack = stack.splice(0);

  stack.forEach(function (test) {
    var result = test.funktion();

    if (result) {
      test.result = result;
    } else {
      test.tests = X_X.stack.splice(0)

      test.tests.forEach(function (test) {
        if (!test.result) {
          X_X.stack.push(test);
        };
      });

      X_X.runTests(X_X.stack);
    };
  });
};
