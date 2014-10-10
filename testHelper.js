(function () {
  var fs = require("fs");
  var vm = require("vm");

  var sandbox = vm.createContext(this);
  var files   = [];

  ["./lib/", "./test/"].forEach(function (directory) {
    fs.readdirSync(directory).forEach(function (file) {
      files.push(directory + file);
    });
  });

  for (var i in files) {
    var file = fs.readFileSync(files[i]);
    vm.runInContext(file, sandbox);
  };
}());
