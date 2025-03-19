const path = require("path");

console.log(__dirname);
console.log(__filename);

// path.join
const filePath = path.join(__dirname, "test", "hello.html");
console.log(filePath);

//path.basename
const baseName = path.basename(filePath);
console.log(baseName);

console.log(path.extname(baseName));

// path.resolve
const absolute = path.resolve(__dirname, "test", "hello.html");
console.log(absolute);
console.log(__filename);

