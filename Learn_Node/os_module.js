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

// 3. os.homedir()
// Returns the home directory of the current user
console.log("Home directory: " + os.homedir());

// 4. os.hostname()
// Returns the hostname of the operating system
console.log("Hostname: " + os.hostname());

// 5. os.networkInterfaces()
// Returns an object containing only the network interfaces that have a MAC address
console.log("Network Interfaces: " + os.networkInterfaces());

// 6. os.platform()
// Returns the operating system platform
console.log("OS Platform: " + os.platform());
