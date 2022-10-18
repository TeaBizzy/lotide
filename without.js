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
    console.log(`✅✅✅Assertion Passed: [${arrayOne}] === [${arrayTwo}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`);
  }
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  
  for (let value of source) {
    for (let badValue of itemsToRemove) {
      if (value !== badValue) {
        newArray.push(value);
        break;
      }
    }
  }

  return newArray;
};

// TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => true
assertArraysEqual(without([false, 5, false, true], [false]), [5, true]); // => true

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => false

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

