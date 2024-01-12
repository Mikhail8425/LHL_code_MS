const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const stringLength = arr => {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(arr[i].length)
  }
  return resultArr;
}

console.log(stringLength(lighthouses))