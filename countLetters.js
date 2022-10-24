const countLetters = function(str) {
  const results = {};

  if(str === undefined) {
    return results;
  }

  for (const char of str) {
    if (char === " ") {
      continue;
    }

    if (results[char]) {
      results[char] ++;
    } else {
      results[char] = 1;
    }
  }
  return results;
};

module.exports = countLetters;