import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

const ShowMenu = () => {
  console.log("\n1: Add a Task :");
  console.log("2: Show All Tasks :");
  console.log("3: Exit");
  rl.question("Choose an option", handleInput);
};

ShowMenu();
