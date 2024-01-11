// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, actionWhenFound) {
  names.forEach((name) => {if (name === 'Waldo') {
    actionWhenFound();
  }})
}

const actionWhenFound = function() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);