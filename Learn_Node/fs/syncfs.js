// utf-8 (8-bit Unicode Transformation Format) --> Encode character from nearly all written language
const fs = require("fs");

const fileName = "test.txt";

const writefile = fs.readFileSync(
  fileName,
  "This is the initial comment",
  "utf-8"
);

console.log(writefile);
