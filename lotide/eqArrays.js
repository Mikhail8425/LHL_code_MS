const eqArrays = function(arr1, arr2) {
  let a1 = arr1;
  let a2 = arr2;
  return (JSON.stringify(a1)==JSON.stringify(a2))
} 


eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false