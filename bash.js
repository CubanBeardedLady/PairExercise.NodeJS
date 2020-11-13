process.stdout.write("prompt > ");
let catfile = "";

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const pwd = require("./pwd");
  const ls = require("./ls");

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd.includes("cat")) {
    catfile = cmd.slice(4);
    process.stdout.write("hello;" + catfile);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});

// cat <fileName> -> provides content of the file
// user will input cat and file name (string)
// the string that gets inputted through bash, will need to be passed to cat.js
// cat.js require string from bash.js
// cat.js converts string through fs.readfile for the content
// exports back tp bash.js
