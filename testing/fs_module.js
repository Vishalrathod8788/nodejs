// const fs = require("fs");
// const path = require("path");

// Create a folder
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

//remove a folder
// fs.rmdir(path.join(__dirname, "/test"), {}, err => {
//   if (err) throw err;
//   console.log("Folder removed...");
// });

let str1 = "krishna";
let str2 = "veni";

const Merge = (str1, str2) => {
  let ans = "";
  for (let i = 0; i < str2.length; i++) {
    ans += str1[i] + str2[i];
  }
  ans += str1.slice(str2.length);
  return ans;
};

console.log(Merge(str1, str2));
