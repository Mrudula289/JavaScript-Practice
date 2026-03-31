const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a string: ", function(input) {
  let rev = "";

  for (let i = input.length - 1; i >= 0; i--) {
    rev += input[i];
  }

  console.log("Reversed:", rev);
  rl.close();
});