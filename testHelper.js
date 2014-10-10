(function () {
  var fs      = require("fs");
  var vm      = require("vm");
  var sandbox = vm.createContext(this);

  ["./lib/", "./test/"].forEach(function (directory) {
    fs.readdirSync(directory).forEach(function (file) {
      var file = fs.readFileSync(directory + file);
      vm.runInContext(file, sandbox);
    });
  });
}());
