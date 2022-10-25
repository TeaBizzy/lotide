// Modifies each element of an array using the callback function, returns the modified array.
const map = function(array, callback) {
  const results = [];
  for (const value of array) {
    results.push(callback(value));
  }
  return results;
};

module.exports = map;