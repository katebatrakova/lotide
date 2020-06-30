
const countLetters = function (sentenceString) {
  let result = {};
  for (let letter of sentenceString) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  console.log(result);
}

module.exports = countLetters;
