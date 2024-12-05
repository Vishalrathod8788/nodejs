//Import  Emitter Class
const { clear } = require("console");
const EventEmitter = require("events");

// Create an Instance of EventEmitter
const emitter = new EventEmitter();

//1. Define an EventListner (addEvent Listner)
//2. Trigger (emit) the greet event

// first way ->
// emitter.on("greet", () => {
//   console.log("Hello, Vishal Rathod");
// });

// emitter.emit("greet");

// Second way ->
// emitter.on("greet", (name) => {
//   console.log(`Hello, ${name}`);
// });

// emitter.emit("greet", "Vishal Rathod");

// Thired way
emitter.on("greet", (args) => {
  console.log(`Hey! ${args.name} You are a ${args.prof}`);
});

emitter.emit("greet", { name: "Vishal Rathod", prof: "Full-Stack Dev" });
