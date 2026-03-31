const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a string: ", function(input) {
  let reversed = input.split("").reverse().join("");

  if (input === reversed) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }

  rl.close();
});