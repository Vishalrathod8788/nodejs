const emitter = require("events");
const fs = require("fs");
const path = require("path");
const fileName = "eventCount.json";

const filePath = path.join(__dirname, fileName);

// create at least four custom events (e. g., user-login, user-logout, user-purchase, profile-update)
// Emit this event multiple time with diffrent argument (e. g., username, item purchased).
// Treack and store the count of each event type:
// Define summury event that logs a detailed report of how many time each event was triggered.

const myEmitter = new emitter();
let eventCounter = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchased": 0,
  "profile-update": 0,
};

myEmitter.on("user-login", (username) => {
  console.log(
    `${username} wants to login, please and ${eventCounter["user-login"]}`
  );
  eventCounter["user-login"]++;
  fs.writeFileSync(filePath, JSON.stringyfy(eventCounter));
});

myEmitter.on("user-logout", (username) => {
  console.log(`${username} wants to logout, please`);
  eventCounter["user-logout"]++;
  fs.writeFileSync(filePath, JSON.stringyfy(eventCounter));
});

myEmitter.on("user-purchased", (product) => {
  console.log(`${product} purchaed !`);
  eventCounter["user-purchased"]++;
  fs.writeFileSync(filePath, JSON.stringyfy(eventCounter));
});

myEmitter.on("profile-update", (email) => {
  console.log(`${email} updated !`);
  eventCounter["profile-update"]++;
  fs.writeFileSync(filePath, JSON.stringyfy(eventCounter));
});

myEmitter.on("summry", () => {
  console.log(eventCounter);
});

myEmitter.emit("user-login", "Vishal");
myEmitter.emit("user-logout", "Sahil");
myEmitter.emit("user-purchased", "Laptop");
myEmitter.emit("profile-update", "vishal8788@gmail.com");

myEmitter.emit("summry", () => {
  console.log(eventCounter);
});
