function testSuperDeadIsAFunction () {
  return typeof superDead === "function";
};

function testX_XequalsSuperDead () {
  return X_X === superDead;
};

console.log(testSuperDeadIsAFunction());
console.log(testX_XequalsSuperDead());
