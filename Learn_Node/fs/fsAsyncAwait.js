const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);

// fs.readdir(__dirname)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const readFolder = async () => {
  try {
    const res = await fs.readdir(__dirname);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

readFolder();
