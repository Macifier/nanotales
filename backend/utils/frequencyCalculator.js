exports.splitByWords = text => {
  // let wordsArray = text.split(/\s+/);
  let wordsArray = text.match(/\b(\w+)\b/g);

  return wordsArray;
};
exports.createWordMap = wordsArray => {
  let wordsMap = {};

  wordsArray.forEach(function(key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });

  return wordsMap;
};
exports.sortByCount = wordsMap => {
  let finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function(key) {
    return {
      name: key,
      total: wordsMap[key]
    };
  });

  finalWordsArray.sort(function(a, b) {
    return b.total - a.total;
  });

  return finalWordsArray;
};
