const without = function(arr1, arr2) {
  let resultArr = [];
  for (let ar1 of arr1) {
    for (let ar2 of arr2) {
      if (ar1 !== ar2) {
        resultArr.push(ar1)
      }
    }
  }
  console.log(resultArr);
} 

const eqArrays = function(arr1, arr2) {
  let a1 = arr1;
  let a2 = arr2;
  return (JSON.stringify(a1)==JSON.stringify(a2))
} 

const assertArraysEqual = function (arr1, arr2) {
  console.log(eqArrays(arr1, arr2));
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);