const eqArrays = require("./eqArrays");

const eqObjects = function(objectA, objectB) {
  // Solve for object length.
  const objAKeys = Object.keys(objectA);
  const objBKeys = Object.keys(objectB);

  if (objAKeys.length !== objBKeys.length) {
    return false;
  }

  // Solve for matching keys AND values
  for (const key in objectA) {
    if (Array.isArray(objectA[key])) {
      if (eqArrays(objectA[key], objectB[key]) === false) {
        return false;
      }
    }
    if (typeof objectA[key] === "object" && !Array.isArray(objectA[key])) {
      if (eqObjects(objectA[key], objectB[key]) === false) {
        return false;
      }
    }
    if (!objectB[key] && objectA[key] !== objectB[key]) { // If the key exists in objB AND the value of the key in objA === the value of the same key in objB.
      return false;
    }
  }

  return true;
};

module.exports = eqObjects; 
