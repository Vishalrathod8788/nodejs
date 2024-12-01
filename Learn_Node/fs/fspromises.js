const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const dirName = __dirname;
const filePath = path.join(__dirname, fileName);

// why .then() and .catch() explain below

fs.promises
  .readdir(dirName)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
