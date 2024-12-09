// import module using common js
// const math = require("./math");

// import module using es6
// import { add, sub, mult, div, PI } from "./math.js";

// import aliased name to use
import * as math from "./math.js";

console.log(`Addition:`, math.add(10, 10));

console.log(`Subtraction:`, math.sub(10, 1));

console.log(`Multuplication:`, math.mult(11, 10));

console.log(`Division:`, math.div(5, 10));

console.log(`PI:`, math.PI);
