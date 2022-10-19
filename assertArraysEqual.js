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


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

assertArraysEqual([], ["1", "2", 3]); // => false
