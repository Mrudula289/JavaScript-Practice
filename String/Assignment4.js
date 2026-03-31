const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a string: ", function(input) {
  let result = input.split(" ").join("-");
  console.log("Result:", result);
  rl.close();
});