const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a sentence: ", function(input) {
  let arr = input.split(" ");
  console.log("Array:", arr);
  rl.close();
});