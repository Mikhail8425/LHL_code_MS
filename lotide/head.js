const head = function (arg) {
  console.log(arg[0]);
}

const assertEqual = function(actual, expected) {

};

// TEST CODE

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");