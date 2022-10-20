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



const takeUntill = function(array, callback) {
  const result = [];

  for (const value of array) {
    if (callback(value)) break;
    result.push(value);
  }

  return result;
};

// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntill(data1, element => element < 0), [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntill(data2, element => element ===  ","), ["I've", "been", "to", "Hollywood"]);
