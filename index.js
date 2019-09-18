const fs = require('fs');
//const readFile = fs.readFileSync('notes.txt');

console.log('Hello Node');

const name = "IP Man";

const add = function(a, b) {
    return a + b;
}


//module.exports.name = name;
//module.exports = readFile;
//module.exports.add = add;

//method-2
module.exports = {
    name: name,
    add: add
}