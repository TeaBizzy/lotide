// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(objA, objB) {
  const inspect = require('util').inspect;
  if (eqObjects(objA, objB)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(objA)} === ${inspect(objB)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(objA)} !== ${inspect(objB)}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }

  return true;
};

const eqObjects = function(objectA, objectB) {
  // Solve for object length.
  const objAKeys = Object.keys(objectA);
  const objBKeys = Object.keys(objectB);

  if (objAKeys.length !== objBKeys.length) {
    return false;
  }

  // Solve for matching keys AND values
  for (const key in objectA) {
    if (Array.isArray(objectA[key])) {
      return eqArrays(objectA[key], objectB[key]);
    }
    if (!objectB[key] && objectA[key] !== objectB[key]) { // If the key exists in objB AND the value of the key in objA === the value of the same key in objB.
      return false;
    }
  }

  return true;
};

// TEST CODE

const objOne = {a: [1, 2, 3], b: true};
const objTwo = {c: false, d: 5.5, e: "Hello"};

assertObjectsEqual(objOne, objTwo); // => false
assertObjectsEqual(objOne, {b: true, a: [1, 2, 3]}); // => true
assertObjectsEqual(objTwo, {c: true, d: 5.5, e: "Hello", f: "Bye"}); // => false
assertObjectsEqual(objOne, {a: [1, 2, 3], b: true, c: "Foo"}); // => false
assertObjectsEqual(objTwo, {d: 5.5, c: false, e: "Hello"}); // => true


