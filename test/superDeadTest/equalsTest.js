// X_X("X_X.equals", function () {
//   X_X("returns true if inputs are equal", function () {
//     return X_X(123).equals(123) === true
//   });
// });

X_X("X_X.equals", function () {
  X_X("returns true if inputs are equal", function () {
    return function () { return X_X(123).equals(123) };
  });
});
