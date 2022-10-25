const without = function(source, itemsToRemove) {
  let newArray = [];
  
  for (let value of source) {
    let isUnwantedValue = false;
    for (let badValue of itemsToRemove) {
      if (value === badValue) {
        isUnwantedValue = true;
      }
    }

    if(isUnwantedValue === false) {
      newArray.push(value);
    }
  }

  return newArray;
};

module.exports = without;