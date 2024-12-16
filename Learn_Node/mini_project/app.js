import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

const ShowMenu = () => {
  console.log("\n1: Add a Task : ");
  console.log("2: Show All Tasks : ");
  console.log("3: Exit");
  rl.question("Choose an option : ", handleInput);
};

const handleInput = (option) => {
  if (option === "1") {
    rl.question("Enter a task : ", (task) => {
      tasks.push(task);
      console.log("Your Task Added");
      ShowMenu();
    });
  } else if (option === "2") {
    if (tasks == "") {
      console.log("No task Found!");
      ShowMenu();
    }
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
    ShowMenu();
  } else if (option === "3") {
    console.log("Good Bye!");
  } else {
    console.log("Invalid option Choose, try again!");
  }
};

ShowMenu();
