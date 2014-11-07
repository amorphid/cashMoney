$_$.runTests = function (stack) {
  var array = stack.splice(0);

  array.forEach(function (test) {
    var result = test.funktion()

    if ($_$.testToRun) {
      test.result = $_$.testToRun;
      $_$.testToRun = undefined;
    } else {
      test.tests = $_$.Stack.splice(0);

      test.tests.forEach(function (test) {
        if (typeof test.result !== "function") {
          $_$.Stack.push(test);
        };
      });

      $_$.runTests($_$.Stack);
    };
  });
};
