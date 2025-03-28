const fs = require("fs");
const path = require("path");

// Create a file
const fileName = "Test.txt";
const filePath = path.join(__dirname, fileName);

// Sync
const data = fs.writeFileSync(filePath, "Hello, World!", "utf8");
console.log(data);

// Async
const writeData = fs.writeFile(
  "AsyncTest.txt",
  "Hello, This is Async File",
  "utf8",
  (err) => {
    console.log(err);
  }
);

const readData = fs.readFile();
