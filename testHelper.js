(function () {
  function addFile (file) {
    var split = file.split("/");

    if (split[1] === "lib" && split.length === 3) {
      filesObj.lib.push(file);
    } else if (split[1] === "lib" && split.length === 4) {
      filesObj.libSub.push(file);
    } else if (split[1] === "lib") {
      filesObj.libSubSub.push(file);
    } else if ((split[1] === "test" && split.length === 3)) {
      filesObj.test.push(file);
    } else if ((split[1] === "test" && split.length === 4)) {
      filesObj.testSub.push(file);
    } else {
      filesObj.testSubSub.push(file);
    };
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

  var fs       = require("fs");
  var vm       = require("vm");
  var filesObj = {
    lib:        [],
    libSub:     [],
    libSubSub:  [],
    test:       [],
    testSub:    [],
    testSubSub: []
  };
  var sandbox = vm.createContext(this);

  ["./lib/", "./test/"].forEach(function (directory) {
    readdir(directory);
  });

  var filesArr = [
    filesObj.lib,
    filesObj.libSub,
    filesObj.libSubSub,
    filesObj.test,
    filesObj.testSub,
    filesObj.testSubSub
  ];

  filesArr.forEach(function (files) {
    runFiles(files);
  });

  vm.runInContext("X_X.tests = X_X.Stack.slice(0);", sandbox);
  vm.runInContext("X_X.runTests(X_X.Stack);", sandbox);
  vm.runInContext("X_X.logTestResults();", sandbox);
}());
