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

const letterPositions = function(str) {
  const results = {};
  
  for (let i = 0; i < str.length; i ++) {
    const char = str[i];
    if (char === " ") {
      continue;
    }
  
    if (results[char]) {
      results[char].push(i);
    } else {
      results[char] = [i];
    }
  }
  return results;
};

// TEST CODE
const testSentance = "lighthouse in the house";

const result = letterPositions(testSentance);
assertArraysEqual(result["l"], [0]);
assertArraysEqual(result["i"], [1, 11]);
assertArraysEqual(result["g"], [2]);
assertArraysEqual(result["h"], [3, 5, 15, 18]);
assertArraysEqual(result["t"], [4, 14]);
assertArraysEqual(result["o"], [6, 19]);
assertArraysEqual(result["u"], [7, 20]);
assertArraysEqual(result["s"], [8, 21]);
assertArraysEqual(result["e"], [9, 16, 22]);
assertArraysEqual(result["n"], [12]);