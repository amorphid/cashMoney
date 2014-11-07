$_$.Test.equals = function (precondition) {
  return function (postcondition) {
    var args = arguments;

    if (args.length !== 1) {
      var e     = Error();
      e.name    = "ArgumentError:  "
      e.message = "Wrong number of arguments (" + args.length + " for 1)"
      throw e;
    };

    $_$.testToRun = function () {
      return precondition === postcondition;
    };
  };
};
