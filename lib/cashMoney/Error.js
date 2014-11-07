$_$.Error = function (name, message) {
  var error     = Error();
  error.name    = name;
  error.message = message;
  throw error;
};
