import fs from "fs";

// Set a delayed message using setTimeout
setTimeout(() => {
  console.log("Hey! How are you!");
}, 5000);

// Read file asynchronously and handle potential errors
fs.readFile("error.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err.message);
  } else {
    console.log(data);
  }
});

console.log("hey!");