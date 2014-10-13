(function () {
  function addFile (file) {
    var split = file.split("/");

    if (split[1] === "lib" && split.length === 3) {
      files.lib.push(file);
    } else if (split[1] === "lib") {
      files.libSub.push(file);
    } else if ((split[1] === "test" && split.length === 3)) {
      files.test.push(file);
    } else {
      files.testSub.push(file);
    }
  };

  function readdir (directory) {
    var items = fs.readdirSync(directory);

    for (var i in items) {
      var item =  directory + items[i];

      try {
        readdir(item + "/");
      } catch (err) {
        if (/.js$/.exec(item)) {
          addFile(item);
        };
      };
    };
  };

  function runFiles (files) {
    for (var i in files) {
      var file = fs.readFileSync(files[i]);
      vm.runInContext(file, sandbox);
    };
  };

  var fs      = require("fs");
  var vm      = require("vm");
  var files   = {
    lib:     [],
    libSub:  [],
    test:    [],
    testSub :[]
  };
  var sandbox = vm.createContext(this);

  ["./lib/", "./test/"].forEach(function (directory) {
    readdir(directory);
  });

  [files.lib, files.libSub, files.test, files.testSub].forEach(function (files) {
    runFiles(files);
  });

  vm.runInContext("X_X.tests = X_X.stack.slice(0);", sandbox);
  vm.runInContext("X_X.runTests(X_X.stack);", sandbox);
  vm.runInContext("console.log(X_X.tests)", sandbox);
}());
