var fs = require("fs");

var files = {
  lib:  [],
  test: []
};

fs.readdirSync("./lib").forEach(function (file) {
  var type = file.split(".").pop();

  if(type === "js"){
    files.lib.push("./lib/" + file);
  };
});

fs.readdirSync("./test").forEach(function (file) {
  var type = file.split(".").pop();

  if(type === "js"){
    files.test.push("./test/" + file);
  };
});

for (var i = 0; i < files.lib.length; i += 1 ) {
  var file = fs.readFileSync(files.lib[i]);
  eval(file.toString());
}

for (var i = 0; i < files.test.length; i += 1 ) {
  var file = fs.readFileSync(files.test[i]);
  eval(file.toString());
}
