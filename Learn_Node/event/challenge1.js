const emitter = require("events");

// create at least four custom events (e. g., user-login, user-logout, user-purchase, profile-update)
// Emit this event multiple time with diffrent argument (e. g., username, item purchased).
// Treack and store the count of each event type:
// Define summury event that logs a detailed report of how many time each event was triggered.

const eventCount = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchased": 0,
  "profile-update": 0,
};

const myEmitter = new emitter();

myEmitter.on("log-in", (username) => {
  console.log(`${username} wants to login, please `);
  eventCount["user-login"] += 1;
});

myEmitter.on("log-out", (username) => {
  console.log(`${username} wants to logout, please`);
  eventCount["user-logout"] += 1;
});

myEmitter.on("user-purchased", (product) => {
  console.log(`${product} purchaed !`);
  eventCount["user-purchased"] += 1;
});

myEmitter.on("profile-update", (email) => {
  console.log(`${email} updated !`);
  eventCount["profile-update"] += 1;
});

myEmitter.on("summary", () => {
  console.log(eventCount);

  //   console.log(`User Login Event ${eventCount["user-login"]} time trigger`);
  //   console.log(`User Logout Event ${eventCount["user-logout"]} time trigger`);
  //   console.log(
  //     `User User Purchased Event ${eventCount["user-purchased"]} time trigger`
  //   );
  //   console.log(
  //     `User Profile Update Event ${eventCount["profile-update"]} time trigger`
  //   );
});

myEmitter.emit("log-in", "Vishal");
myEmitter.emit("log-out", "Vishal");
myEmitter.emit("user-purchased", "Vishal");
myEmitter.emit("profile-update", "coder@vishal.sbs");

myEmitter.emit("summary");
