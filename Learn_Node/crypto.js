// crypto module in Node.js
const crypto = require("crypto");

// createhash node
const hash = crypto.createHash("sha256");
hash.update("Hello, World!");
console.log(hash.digest("hex"));
