const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (Array.isArray(firstArray[i])) {
      if (eqArrays(firstArray[i], secondArray[i]) === false) {
        return false;
      } else {
        continue;
      }
    }
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

module.exports =  eqArrays;

