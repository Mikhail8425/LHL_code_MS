'use strict';

for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}

/*
It's very useful for debugging if you ever question what arguments you're receiving, and in what order.
To run this type the following command: 
$ node processargv.js tom jack 43
Make sure you are in the directory where the processargv.js file is saved.

https://stackabuse.com/command-line-arguments-in-node-js/
*/