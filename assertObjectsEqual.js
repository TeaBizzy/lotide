const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(objA, objB) {
  const inspect = require('util').inspect;
  if (eqObjects(objA, objB)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(objA)} === ${inspect(objB)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(objA)} !== ${inspect(objB)}`);
  }
};

module.exports = assertObjectsEqual;