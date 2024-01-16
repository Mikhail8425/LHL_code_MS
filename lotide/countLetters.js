const countLetters = function (str) {
  let result = {};
  for (let letter of str) {
    result[letter] = result.hasOwnProperty(letter) ? result[letter] + 1 : 1;
  }
  return result;
}

console.log(countLetters('LHL')); 
//L - 2, H -1