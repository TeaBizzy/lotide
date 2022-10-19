// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item] === false) {
      continue;
    }
    if (results[item] === undefined) {
      results[item] = 1;
    } else {
      results[item] ++;
    }
  }
  return results;
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const filterObj = {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false};

const result = countOnly(firstNames, filterObj);

assertEqual(result["Jason"], 1);
assertEqual(result["Karim"], undefined);
assertEqual(result["Fang"], 2);
assertEqual(result["Agouhanna"], undefined);