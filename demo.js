// develope two integer sum 
// function addTwoIntegers(num1, num2) {
//   // Check if the inputs are integers
//   if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
//     throw new Error('Both inputs must be integers');
//   }

//   // Perform the addition
//   const sum = num1 + num2;

//   // Return the sum
//   return sum;
// }

// // develop three number sum
// function addThreeIntegers(num1, num2, num3) {
//   // Check if the inputs are integers
//   if (!Number.isInteger(num1) || !Number.isInteger(num2) || !Number.isInteger(num3)) {
//     throw new Error('All inputs must be integers');
//   }

//   // Perform the addition
//   const sum = num1 + num2 + num3;

//   // Return the sum
//   return sum;
// }

// develope even odd program
function isEven(num) {
  // Check if the input is an integer
  if (!Number.isInteger(num)) {
    throw new Error('Input must be an integer');
  }

  // Check if the number is even
  return num % 2 === 0;
}

// call isEven function
console.log(isEven(4));

// Sum of two integer
function addTwoIntegers(num1, num2) {
  // Check if the inputs are integers
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    throw new Error('Both inputs must be integers');
  }

  // Perform the addition
  const sum = num1 + num2;

  // Return the sum
  return sum;
}
console.log(addTwoIntegers(10, 20));
module.exports = addTwoIntegers;
