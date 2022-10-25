const flatten = function(list) {

  let flatArray = [];

  for (let value of list) {
  
    if (!Array.isArray(value)) {
      flatArray.push(value);
    } else {
      for (let element of flatten(value)) {
        flatArray.push(element);
      }
    }
  }

  return flatArray;
};

module.exports = flatten;