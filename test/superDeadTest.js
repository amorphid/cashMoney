X_X("superDead", function () {
  X_X("is a function", function () {
    return typeof superDead === "function";
  });

  X_X("is equal to X_X", function () {
    return X_X === superDead;
  });

  X_X("throws error when called with 0 arguments",function () {
    funktion = function () {  X_X() };
    return X_X(funktion).shouldThrowError();
  });
});
