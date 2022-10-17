const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

// TEST CODE
const words = ["Ballons", "Lighthouse", "Labs", "Foo", "Bar"];
assertEqual(tail(words).length, words.length - 1);
assertEqual(tail(words)[0], "Lighthouse");