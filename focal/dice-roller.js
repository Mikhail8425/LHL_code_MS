const diceRoll = function(rolls) {
  for (let i = 0; i < rolls; i++) {
    console.log('bla')
    i = Math.floor(Math.random() * 6) + 1;
    console.log(i);
    nums.push(i);
  }
  return nums;
}