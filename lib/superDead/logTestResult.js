X_X.logTestResult = function (test) {
  if (typeof test.result === "boolean") {
    var result = test.string + " => " + test.result.toString();
    console.log(result);
  } else {
    for (var i = 0; i < test.tests.length; i += 1) {
      test.tests[i].string = test.string + " " + test.tests[i].string;
      X_X.logTestResult(test.tests[i]);
    };
  };
};
