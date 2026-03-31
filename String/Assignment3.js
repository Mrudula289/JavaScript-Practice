const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a sentence: ", function(input) {
  let word = input.split(" ")[0];
  console.log("First word:", word);
  rl.close();
});