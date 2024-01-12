const swapper = function (key1, object1, key2, object2) {
  console.log("Swap!");
  const obj1Keys = Object.keys(object1);
  //console.log('object1 keys',obj1Keys)
  const obj1Values = Object.values(object1);
  // console.log('object1 values',obj1Values)
  const obj2Keys = Object.keys(object2);
  // console.log('object2 keys',obj2Keys)
  const obj2Values = Object.values(object2);
  // console.log('object2 values',obj2Values)

  let obj1NeededValue = '';
  for (let i = 0; i < obj1Keys.length; i++) {
    for(let j = 0; j < obj1Values.length; j++) {
      if (key1 === obj1Keys[i]) {
        obj1NeededValue = obj1Values[i]
      }
    }
  }
  // console.log("neededValue", obj1NeededValue)

  let obj2ValueToReplace = '';
  for (let i = 0; i < obj2Keys.length; i++) {
    for(let j = 0; j < obj2Values.length; j++) {
      if (key2 === obj2Keys[i]) {
        obj2ValueToReplace = obj2Values[i]
      }
    }
  }
  // console.log('obj2ValueToReplace', obj2ValueToReplace)

  obj2ValueToReplace = obj1NeededValue;
  // console.log('obj2ValueToReplace', obj2ValueToReplace)

  for (let i = 0; i < obj2Keys.length; i++) {
    if (key2 === obj2Keys[i]) {
      console.log(obj2Keys[i])
      console.log(i)
      obj2Values[i] = obj1NeededValue
    }
  }

  let a = obj2Keys;
  let b = obj2Values;
  
  // Checking if the array lengths are same 
  // and none of the array is empty
  function convertToObj(a, b) {
    if (a.length != b.length || 
      a.length == 0 || 
      b.length == 0) {
      return null;
    }
    let obj = {};

    // Using the foreach method
    a.forEach((k, i) => { obj[k] = b[i] })
    return obj;    
  }
  
  object2 = convertToObj(obj2Keys, obj2Values)

  // console.log(obj1Keys)
  // console.log(obj1Values)
  // console.log(obj2Keys)
  // console.log(obj2Values)

  console.log("object1: ", object1);
  console.log("object2: ", object2);
};

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });