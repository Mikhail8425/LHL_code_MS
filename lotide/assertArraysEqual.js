const eqArrays = function(arr1, arr2) {
  let a1 = arr1;
  let a2 = arr2;
  return (JSON.stringify(a1)==JSON.stringify(a2))
} 

const assertArraysEqual = function (arr1, arr2) {
  console.log(eqArrays(arr1, arr2));
}

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);