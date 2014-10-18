X_X.logTestResult = function (test) {
  if (typeof test.result === "function") {
    var result       = test.result();
    var resultString = test.string + " => " + result.toString();
    var color        = result ? "32" : "31"

    console.log("\033[" + color + "m" + resultString + "\033[00m");
  } else {
    for (var i = 0; i < test.tests.length; i += 1) {
      test.tests[i].string = test.string + " " + test.tests[i].string;
      X_X.logTestResult(test.tests[i]);
    };
  };
};
