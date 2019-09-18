// Uses of validator and chalk modules

var validator = require('validator');
const chalk = require('chalk');
console.log(chalk.hidden.inverse.italic.underline.blue.bgRed('hello'));

console.log(chalk.bgRed(validator.isEmail('foo@bar.com'))); //=> true