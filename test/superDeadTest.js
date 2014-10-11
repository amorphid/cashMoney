X_X("superDead is a function", function () {
  return typeof superDead === "function";
});

X_X("X_X is equal to superDead", function () {
  return X_X === superDead;
});

X_X("X_X", function () {
  X_X(".shouldThrowError", function () {
    X_X("is a function", function () {
      return typeof X_X.shouldThrowError === "function"
    });
  });
});
