const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");
const emitter = new EventEmitter();
const fileName = "eventCount.json";
const filePath = path.join(__dirname, fileName);

// create at least four custom events (e. g., user-login, user-logout, user-purchase, profile-update)
// Emit this event multiple time with diffrent argument (e. g., username, item purchased).
// Treack and store the count of each event type:
// Define summury event that logs a detailed report of how many time each event was triggered.

let eventCount = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0,
};

try {
  const data = fs.readFileSync(filePath);
  eventCount = JSON.parse(data);
} catch (error) {
  console.log("File not found", error);
}

emitter.on("user-login", (username) => {
  console.log(`${username} is login`);
  eventCount["user-login"]++;
  fs.writeFileSync(filePath, JSON.stringify(eventCount), "utf-8");
});

emitter.on("user-logout", (username) => {
  console.log(`${username} is logout`);
  eventCount["user-logout"]++;
  fs.writeFileSync(filePath, JSON.stringify(eventCount), "utf-8");
});

emitter.on("user-purchase", (product) => {
  console.log(`${product} is purchased`);
  eventCount["user-purchase"]++;
  fs.writeFileSync(filePath, JSON.stringify(eventCount), "utf-8");
});
emitter.on("profile-update", (update) => {
  console.log(`Profile updated: ${update}`);
  eventCount["profile-update"]++;
  fs.writeFileSync(filePath, JSON.stringify(eventCount), "utf-8");
});

emitter.on("summary", () => {
  console.log(eventCount);
});

emitter.emit("user-login", "Vishal");
emitter.emit("user-logout", "Vishal");
emitter.emit("user-purchase", "Laptop");
emitter.emit("profile-update", "Vishal Rathod");
emitter.emit("summary");
