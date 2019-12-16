const https = require("https");
const frequencyCalculatorFunctions = require("../utils/frequencyCalculator");
exports.getFrequentWords = (req, res, next) => {
  const numberOfWords = req.query.number;

  https
    .get("https://terriblytinytales.com/test.txt", resp => {
      let data = "";

      resp.on("data", chunk => {
        data += chunk;
      });

      resp.on("end", () => {
        let wordsArray = frequencyCalculatorFunctions.splitByWords(data);
        let wordsMap = frequencyCalculatorFunctions.createWordMap(wordsArray);
        let finalWordsArray = frequencyCalculatorFunctions.sortByCount(
          wordsMap
        );
        let requiredWords = finalWordsArray.slice(0, numberOfWords);
        res.status(200).json({
          message: "Words Count Retrieved Successfully",
          words: requiredWords
        });
      });
    })
    .on("error", err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
