const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const dirName = __dirname;
const filePath = path.join(__dirname, fileName);

// why .then() and .catch() explain below

fs.promises
  .readdir(dirName)
  .then((data) => console.log("Read a Directory :", data))
  .catch((error) => console.log(error));

const updateData = "new update File";
fs.promises
  .writeFile(fileName, updateData, "utf-8")
  .then(() => console.log("File written successfully:", updateData))
  .catch((error) => {
    // Write error to error.txt file
    const errorMessage = `${new Date().toISOString()} - Error: ${
      error.message
    }\n`;
    fs.promises
      .appendFile("error.txt", errorMessage, "utf-8")
      .then(() => console.log("Error logged to file"))
      .catch((err) => console.log("Failed to write error log:", err));

    console.log(error);
  });

// fs.promises
//   .readFile(fileName, "utf-8")
//   .then((data) => console.log("Read a File :", data))
//   .catch((error) => console.log(error));

// fs.promises
//   .unlink(fileName)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
