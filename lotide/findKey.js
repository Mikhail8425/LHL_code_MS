const findKey = function (object,callback) {
  const result = Object.keys(object).find(key => {
    if (callback(object[key])) { 
      return key;
    }
  });
  return result;
}


const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log('result:', result)