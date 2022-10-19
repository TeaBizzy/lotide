// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const results = {};

  for (const char of str) {
    if (char === " ") {
      continue;
    }

    if (results[char]) {
      results[char] ++;
    } else {
      results[char] = 1;
    }
  }
  console.log(results);
  return results;
};

// TEST CODE
const testString = "I'm learning so much at Lighthouse Labs";

const result = countLetters(testString);

assertEqual(result["l"], 1);
assertEqual(result["L"], 2);
assertEqual(result["'"], 1);