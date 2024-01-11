const eqArrays = function(arr1, arr2) {
  let a1 = arr1;
  let a2 = arr2;
  return (JSON.stringify(a1)==JSON.stringify(a2))
} 

const assertArraysEqual = function (arr1, arr2) {
  console.log(eqArrays(arr1, arr2));
}

const middle = function (arr) {
  let midArr = [];
  if (arr. length > 2 && arr.length %2 ==  0) {
    let middle1 = arr[[Math.floor(arr.length / 2)] - 1];
    midArr.push(middle1)
    let middle2 = arr[Math.floor(arr.length / 2)];
    midArr.push(middle2) 
  } else if (arr. length > 2 && arr.length %2 ==  1) {
    let middle = arr[Math.floor(arr.length / 2)];
    midArr.push(middle)
  }
  console.log('midArr', midArr)
}

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]