const letterPositions = function(str) {
  const results = {};

  if(str === undefined) {
    return results;
  }
  
  for (let i = 0; i < str.length; i ++) {
    const char = str[i];
    if (char === " ") {
      continue;
    }
  
    if (results[char]) {
      results[char].push(i);
    } else {
      results[char] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;