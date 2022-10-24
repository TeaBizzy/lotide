const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item] !== true) {
      continue;
    }
    if (results[item] === undefined) {
      results[item] = 1;
    } else {
      results[item] ++;
    }
  }
  return results;
};

module.exports = countOnly;