const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a string: ", function(input) {

  if (input.length === 0) {
    console.log("False");
  } else if (input[0] === input[input.length - 1]) {
    console.log("True");
  } else {
    console.log("False");
  }

  rl.close();
});