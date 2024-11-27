const path = require("path");
console.log(__dirname);
console.log(__filename);

const filePath = path.join("Folder", "Student", "Data.txt");
console.log(filePath);
console.log(path.parse(filePath));
console.log(path.resolve("Folder", "Student", "Data.txt"));
console.log(path.basename(filePath));
console.log(path.dirname(filePath));

