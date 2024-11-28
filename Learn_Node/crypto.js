// crypto module in Node.js
const crypto = require("crypto");

// createhash node
const hash = crypto.createHash("sha256");
hash.update("Hello, World!");
console.log(hash.digest("hex"));

// rendombyte
const randomBytes = crypto.randomBytes(16);
console.log(randomBytes.toString("hex"));

// randomInt
const randomInt = crypto.randomInt(10, 100);
console.log(randomInt);

// timingSafeEqual
const buffer1 = Buffer.from("Hello, World!");
const buffer2 = Buffer.from("Hello, World!");
console.log(crypto.timingSafeEqual(buffer1, buffer2));
