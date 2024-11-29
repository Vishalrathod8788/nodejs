// utf-8 (8-bit Unicode Transformation Format) --> Encode character from nearly all written language
const fs = require("fs");

const fileName = "test.txt";

const writefile = fs.writeFileSync(
  fileName,
  "This is the initial comment",
  "utf-8"
);

console.log(writefile);

// Read File

const readfile = fs.readFileSync(fileName, "utf-8");
console.log("Read :", readfile);

// Update File
const updateFile = fs.appendFileSync(fileName, "This is the updated comment");
console.log(updateFile);
const readfile2 = fs.readFileSync(fileName, "utf-8");
console.log("Update :", readfile2);

// fs.unlink
// const deleteFile = fs.unlinkSync(fileName);
// console.log(deleteFile);

// fs.renameSync
const renameFile = fs.renameSync(fileName, "newTest.txt");
console.log(renameFile);