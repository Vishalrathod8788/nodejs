import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter File Name : ", (Fname) => {
  rl.question("Enter File Contain :", (Fcontain) => {
    fs.writeFile(`${Fname}.txt`, `${Fcontain}`, "utf-8", (error) => {
      if (error) {
        console.log("Error Occured");
      } else {
        console.log(`${Fname}.txt File Created Successfully`);
        rl.close(console.log("Good Bye!"));
      }
    });
  });
});
