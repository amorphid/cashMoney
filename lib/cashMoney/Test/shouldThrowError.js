$_$.Test.shouldThrowError = function (funktion) {
  return function () {
    var args = arguments;

    if (args.length > 0) {
      var e     = Error();
      e.name    = "ArgumentError:  "
      e.message = "Wrong number of arguments (" + args.length + " for 0)"
      throw e;
    };

    $_$.testToRun = function () {
      try {
        funktion();
      } catch (err) {
        return true;
      };

      return false;
    };
  };
};
