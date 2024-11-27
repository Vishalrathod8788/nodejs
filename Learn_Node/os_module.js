// Os Module in Node.js
// The OS module provides operating system-related utility methods and properties.
// It can be accessed using:

const os = require("os");

// 1. os.arch()
// Returns the operating system CPU architecture
console.log("OS CPU architecture: " + os.arch());

// 2. os.cpus()
// Returns an array of objects containing information about each CPU/core
console.log("Free memory: " + os.freemem());
