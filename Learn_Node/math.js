const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mult = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const PI = 3.14;

// 1. Induviduale Export
// module.exports.add = add;
// module.exports.sub = sub;

// 2. All Module Export
module.exports = { add, sub, mult, div, PI };

// 3. You can also do this like -> Object distructuring method (Seam like java syntax)
