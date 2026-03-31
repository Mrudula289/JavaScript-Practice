const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", function(input) {

  function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  console.log("Vowels:", countVowels(input));

  rl.close();
});