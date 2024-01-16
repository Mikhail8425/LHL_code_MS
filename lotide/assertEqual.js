//https://developer.mozilla.org/en-US/docs/Web/API/console/assert_static
//console.assert(1 === 1); // => nothing happens because true
//console.assert(1 === 1.1); // => prints out "Assertion failed" to the terminal

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual == expected) {
    console.log(actual == expected)
  } 
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

module.exports = assertEqual;