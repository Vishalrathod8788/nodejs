const { writeFile } = require("fs");
const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncFile.txt";

const readFolder = async () => {
  try {
    const res = await fs.readdir(__dirname);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const data = "Update Hello World";
const writeFileData = async () => {
  try {
    const res = await fs.writeFile(fileName, data, "utf-8");
    console.log("Data Write Successfully");
  } catch (error) {
    console.log(`custome error : ${error}`);
  }
};

readFolder();
writeFileData();
