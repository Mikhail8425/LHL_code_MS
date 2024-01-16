const letterPositions = function(sentence) {
  let results = {};
  for (let letter of sentence) {
    results[letter] = [];
    for (let i = 0; i < sentence.length; i++) {
      if (letter === sentence[i]) {
        results[letter].push(i);
      }
    }
  }
  return results;
};