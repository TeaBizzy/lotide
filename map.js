// FUNCTION IMPLEMENTATION
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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log("✅✅✅Assertion Passed: ", arrayOne, " === ", arrayTwo); // Do not use template literals, they cause arrays to display improperly.
  } else {
    console.log("🛑🛑🛑Assertion Failed: ", arrayOne, " !== ", arrayTwo); // Do not use template literals, they cause arrays to display improperly.
  }
};


const map = function(array, callback) {
  const results = [];
  for (const value of array) {
    results.push(callback(value));
  }
  return results;
};

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const doubled = [2, 4, 6, 8];
const remainerMod2 = [2, 10];

assertArraysEqual(map(words, element => element + " Tom"), ["ground Tom", "control Tom", "to Tom", "major Tom", "tom Tom"]); // => true
assertArraysEqual(map(doubled, element => element * 2), [4, 8, 12, 16]); // => true
assertArraysEqual(map(remainerMod2, element => element % 2), [0, 0]); // => true
