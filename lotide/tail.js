const tail = function(words) {
  if (words.length < 2) {
    console.log([]);
  } else {
    result = [];
    for (let i = 1; i < words.length; i++) {
      result.push(words[i]);
    }
    console.log(result);
  }
}

const assertEqual = function(actual, expected) {
  if (actual == expected) {
    console.log(`${actual}` == `${expected}`)
  } else {
    console.log(false)
  } 
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);