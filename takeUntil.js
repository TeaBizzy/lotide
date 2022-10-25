const takeUntill = function(array, callback) {
  const result = [];

  for (const value of array) {
    if (callback(value)) {
      break;
    }
      
    result.push(value);
  }

  return result;
};

module.exports = takeUntill;