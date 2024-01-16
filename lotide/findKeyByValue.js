const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


const eqArrays = function(arr1, arr2) {
  let a1 = arr1;
  let a2 = arr2;
  return (JSON.stringify(a1)==JSON.stringify(a2))
} 

const assertArraysEqual = function (arr1, arr2) {
  console.log(eqArrays(arr1, arr2));
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);