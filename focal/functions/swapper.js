/*
//attempt #1
const swapper = function (key1, object1, key2, object2) {
  console.log("Swap!");

  // Put your solution here
  //Creates object1 nested array with pairs of keys and values
  let obj1 = Object.keys(object1).map((key) => [key, object1[key]])
  console.log("obj1: expected result = . Outcome: "obj1)

  for (let i = 0; i < obj1.length; i++) {
    console.log(obj1[i]);
    for (let j = 0; j < obj1[i]; j++)
    console.log(obj1[i][j])
  }

  console.log("object1: ", object1);
  console.log("object2: ", object2);
};



swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });*/

/*//attempt #2

const swapper = function (key1, object1, key2, object2) {
  console.log("Swap!");

  //print out original values 

  console.log("object1: ", object1);
  console.log("object2: ", object2);
  
  // fetch the value stored in key1 in object1, and then store that value in key2 of object2.
  //key1 in object1 => object1[key1]
  console.log("key1 in object1 => Expected a: 1 => Result a: ", object1[key1]);

  //key2 in object2 => object2[key2]
  console.log("key2 in object2 => Expected c: 5 => Result c: ", object2[key2]);

  //take the original value stored in key2 of object2, and store that in key1 of object1.
  //assign a value to keys
  const valueFromKey1 = object1[key1];
  const valueFromKey2 = object2[key2];

  //store value from object1[key1] to object2[key2]
  object1[key1] = valueFromKey2;
  object2[key2] = valueFromKey1;

  //now that values are changed. print new key results
  //key1 in object1 from original object2[key2]
  // \n next line indicator (added for readability)
  console.log("\nkey1 in object1 => Expected a: 5 => Result a: ", object1[key1]);

  //key2 in object2 from original object1[key1]
  console.log("key2 in object2 => Expected c: 1 => Result c: ", object2[key2]);

  //not need to return anything.

  //print new object with switched keys.

  console.log("object1: ", object1);
  console.log("object2: ", object2);
};

//remember to remove // coments once first test case has passed. 
//console log of expected => results is only for first test case. 

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
//swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
//swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });*/

//Mikhail's attempt 

const swapper = function (key1, object1, key2, object2) {
  console.log("Swap!");

  const obj1Keys = Object.keys(object1);
  console.log('object1 keys',obj1Keys)
  const obj1Values = Object.values(object1);
  console.log('object1 values',obj1Values)
  const obj2Keys = Object.keys(object2);
  console.log('object2 keys',obj1Keys)
  const obj2Values = Object.values(object2);
  console.log('object2 values',obj1Values)
  let obj1NeededValue = [];
  for (let i = 0; i < obj1Keys.length; i++) {
    for(let j = 0; j < obj1Values.length; j++) {
      if (key1 == obj1Keys[i]) {
        obj1NeededValue.push(obj1Values[i])
      }
    }
  }
  console.log("neededValue", obj1NeededValue)

  let obj2ValueToReplace = [];
  for (let i = 0; i < obj2Keys.length; i++) {
    for(let j = 0; j < obj2Values.length; j++) {
      if (key2 == obj2Keys[i]) {
        obj2ValueToReplace.push(obj2Values[i])
      }
    }
  }
  console.log('obj2ValueToReplace', obj2ValueToReplace)

  obj2ValueToReplace = obj1NeededValue;
  console.log('obj2ValueToReplace', obj2ValueToReplace)

  

  // Put your solution here

  //console.log("object1: ", object1);
  //console.log("object2: ", object2);
};

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
//swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
//swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });
