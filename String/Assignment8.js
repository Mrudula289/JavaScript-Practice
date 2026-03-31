const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a string: ", function(str) {

  rl.question("Enter character: ", function(ch) {

    let count = 0;

    for (let c of str) {
      if (c === ch) count++;
    }

    console.log("Occurrences:", count);
    rl.close();
  });

});