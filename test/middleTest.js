const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// TEST CODE
const testOddArray = [1, 2, 3];
const testEvenArray = [true, false, false, true];
const testEvenArrayTwo = [true, false, false, true, false, true, true, true];
const testSmallArray = ["A", "B"];

assertArraysEqual(middle(testOddArray), [1]); // true
assertArraysEqual(middle(testEvenArray), [1, 2]); // true
assertArraysEqual(middle(testEvenArrayTwo), [3, 4]); // true
assertArraysEqual(middle(testSmallArray), []); // true