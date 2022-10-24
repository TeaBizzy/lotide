const middle = function(array) {
  if (array.length < 3) {
    return [];
  }
  
  if (array.length % 2 === 0) {
    const indexA = array.length / 2;
    const indexB = indexA - 1;
    return [indexB, indexA];
  } else {
    return [Math.floor(array.length / 2)];
  }
};

module.exports = middle;

