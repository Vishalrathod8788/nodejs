// const math = require("./math");

// console.log(`Addition:`, math.add(5, 10));

// console.log(`Subtraction:`, math.sub(5, 10));

// console.log(`Multuplication:`, math.mult(5, 10));

// console.log(`Division:`, math.div(5, 10));

// console.log(`PI:`, math.PI);

// this is common JS

const { add, sub, mult, div, PI } = require("./math");

console.log(`Addition:`, add(5, 10));

console.log(`Subtraction:`, sub(5, 10));

console.log(`Multuplication:`, mult(5, 10));

console.log(`Division:`, div(5, 10));

console.log(`PI:`, PI);