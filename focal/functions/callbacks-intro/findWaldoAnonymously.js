// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, actionWhenFound) {
  names.forEach((name) => {if (name === 'Waldo') {
    actionWhenFound(names.indexOf(name));
  }})
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], () => console.log("Found him!"));

findWaldo(
  ["Alice", "Bob", "Waldo", "Winston"], ((index) => {console.log("Waldo is located at:", index);}));