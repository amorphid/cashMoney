function superDead (something, funktion) {
  var args          = arguments;
  var somethingType = typeof something;
  var funktionType  = typeof funktion;
  var validTypes    = (somethingType === "string"  ) &&
                      (funktionType  === "function");

  if (args.length < 1 || args.length > 2) {
    var e     = Error();
    e.name    = "ArgumentError:  "
    e.message = "Wrong number of arguments (" + args.length + " for  1..2)"
    throw e;
  }

  if (args.length === 1) {
    var object = {}

    object.something = something
    object.shouldThrowError = X_X.shouldThrowError

    return object;
  }

  if (!validTypes) {
    var message = " Argument 1 must be a String (";
    message    += somethingType[0].toUpperCase() + somethingType.slice(1);
    message    += " given) & Argument 2 must be a Function (";
    message    += funktionType[0].toUpperCase() + funktionType.slice(1);
    message    += " given)"
    throw TypeError(message);
  };

  X_X.stack.push({
    funktion: funktion,
    string:   something
  });
};

var X_X = superDead;

X_X.stack = [];
