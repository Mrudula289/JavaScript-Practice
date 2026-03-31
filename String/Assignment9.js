const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a string: ", function(input) {
  let clean = input.replace(/[^a-zA-Z0-9]/g, "");
  console.log("Clean string:", clean);
  rl.close();
});