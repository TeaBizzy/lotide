// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
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
      if(eqArrays(objectA[key], objectB[key]) === false) {
        return false;
      }
    }
    if (!objectB[key] && objectA[key] !== objectB[key]) { // If the key exists in objB AND the value of the key in objA === the value of the same key in objB.
      return false;
    }
  }

  return true;
};

// TEST CODE

// Primitive Types
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

// Array Types
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
