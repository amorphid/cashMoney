X_X.Object.keys = function () {
  var thisKeys  = Object.keys(this);
  var proto     = this.__proto__;
  var protoKeys = proto ? proto.keys() : [];
  var keys      = Array.prototype.concat(thisKeys, protoKeys);

  return keys.sort();
};
