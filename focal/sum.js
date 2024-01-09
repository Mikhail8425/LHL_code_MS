const args = process.argv.slice(2);

let x = 0;
for (arg of args) {
    x += Number(arg);
}

console.log(x);