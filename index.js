var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");

var notes = "NPM is a easy way to program complicated stuff";

var lines = "Before you write a function, just check.. is there a NPM for it?"

var funstuff = "A fun npm is cowsay, who doesnt want a talking cow?"
console.log(message);
console.log(chalk.green(notes));
console.log(chalk.magenta.bold(lines));
console.log(chalk.yellowBright(funstuff));