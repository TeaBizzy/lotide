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


const middle = function(array) {
  if (array.length < 3) {
    return [];
  }
  
  if (array.length % 2 === 0) {
    const indexA = array.length / 2;
    const indexB = indexA - 1;
    return [indexB, indexA];
  } else {
    return [Math.floor(array.length / 2)];
  }
};

// TEST CODE
const testOddArray = [1, 2, 3];
const testEvenArray = [true, false, false, true];
const testEvenArrayTwo = [true, false, false, true, false, true, true, true];
const testSmallArray = ["A", "B"];

assertArraysEqual(middle(testOddArray), [1]); // true
assertArraysEqual(middle(testEvenArray), [1, 2]); // true
assertArraysEqual(middle(testEvenArrayTwo), [3, 4]); // true
assertArraysEqual(middle(testSmallArray), []); // true
