const args = process.argv;

for (let j = 2; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}

console.log(args);