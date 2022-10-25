const findKeyByValue = function(obj, desiredKey) {
  for (const key in obj) {
    if (obj[key] === desiredKey) {
      return key;
    }
  }

  return;
};

module.exports = findKeyByValue;