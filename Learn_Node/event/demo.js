const event = require("events");

const handleFunction = (myName) => {
  console.log(`Hello my name is ${myName}, this is handleFunction`);
};

// Create Instence of Emitter
const emitter = new event.EventEmitter();

// 1. Define an event lister (addListener)
emitter.on("myFun", (myName) => {
  handleFunction(myName);
});

// 2. Trigger an event (emit)
emitter.emit("myFun", "Vishal");
