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

const flatten = function(list) {

  let flatArray = [];

  for (let value of list) {
  
    if (!Array.isArray(value)) {
      flatArray.push(value);
    } else {
      for (let element of value) {
        flatArray.push(element);
      }
    }
  }

  return flatArray;
};

// CODE TESTS

const candy = ["chocolate", "candy corn", ["gummy bear", "sour key"]];

assertArraysEqual(flatten(candy), ["chocolate", "candy corn", "gummy bear", "sour key"]); // => true
assertArraysEqual(flatten(candy), candy); // => false

const sales = [[5.50, 1.00, 13.99], 5.66, [13.49, 1.99]];

assertArraysEqual(flatten(sales), [5.50, 1.00, 13.99, 5.66, 13.49, 1.99]); // => true
assertArraysEqual(flatten(sales), sales); // => false