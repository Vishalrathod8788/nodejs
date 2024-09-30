// let x = "b";
// let y = "a";

const e = require("express");

// console.log(x + y + +y + y);

// console.log(x++); //baNaNa
// --------------------------------------------------------------------------------------------
//--> Operatore

// 1). What will be the output of 3**3?

// console.log(3**3);  // 27

// 2). What will be the output, when we add a number and string?

// console.log(1 + "1");  // 11

// 3). Write a program to swap two numbers?

// console.log("a = " +a, "b = "+b);

// let temp = a;
// a = b;
// b = temp;

// console.log("a = " +a, "b = "+b);

// 4). Write a program to swap two numbers but without using 3rd variable

// 1st Method

// let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log("a = " + a, "b = " + b);

// 2nd Method

// let a = 10;
// let b = 20;
// console.log("Swap Before");

// console.log("a = " + a, "b = " + b);

// a = a + b;
// b = a - b;
// a = a - b;
// console.log("Swap After");

// console.log("a = " + a, "b = " + b);

// --------------------------------------------------------------------------------------------

// 1). Write program if a given year is leap year or not? (Leap year condition - divisible by 400 or divisible by 4 but not 100)

// var year = 8887;

// For Begginer

// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       console.log("Leap Year");
//     } else {
//       console.log("Not Leap Year");
//     }
//   } else {
//     console.log("Leap Year");
//   }
// } else {
//   console.log("Not Leap Year");
// }

// For Advance

// if (year % 4 == 0 || (year % 400 == 0 && year % 100 != 0)) {
//   console.log(year, "is Leap Year...");
// } else {
//   console.log(year, "is not leap year");
// }

// --------------------------------------------------------------------------------------------

// Arrays

// 1. Add Dec at the end  of an Array

// const month = ["Jan", "Mar", "Apr", "Jun", "Jul"];
// console.log(month);
// month.splice(month.length, 0, "Dec");
// console.log(month);

// 2. What is the return value of splice method
// month.splice(month.length, 0, "Dec");
// console.log(month);

// 3. Update Mar to march (update) ?
// month.splice(1, 1, "march");
// console.log(month);
// 4. Delete Jun from an array?
// month.splice(3, 1);
// console.log(month);

// console.log(1 + + '2' + '2'); // 32 because + + '2' assume unery Opeator so convert in NUmber

// --------------------------------------------------------------------------------------------

// Map, Filter, Reduce Method in Array

// 1. Map Method

// Find an Array of Square Root of given Array ?

// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.map((curEle) => {
//   return curEle * curEle;
// });

// console.log(newArr);

// 2. Map Method

// // Map method real life example
// const users = [
//   { firstName: "Vishal", age: 22 },
//   { firstName: "Rahul", age: 21 },
//   { firstName: "Raj", age: 23 },
//   { firstName: "Ramesh", age: 24 },
// ];
// const userName = users.map((user) => {
//   return user.firstName;
// });

// console.log(userName);

// 3. Map Method

// Real-Life Example: Calculating Total Prices with Tax

// const productPrices = [100, 200, 300, 400];

// const taxPrices = productPrices.map((price) => {
//   return price + price * 0.1;
// });

// console.log(taxPrices);

// 4. Formating User Date

// const userData = [
//   { firstName: "Vishal", lastName: "Rathod", age: 22 },
//   { firstName: "Rahul", lastName: "Rathod", age: 21 },
//   { firstName: "Raj", lastName: "Rathod", age: 23 },
//   { firstName: "Ramesh", lastName: "Rathod", age: 24 },
// ];

// const FirstName = userData.map((user) => user.firstName);
// const LastName = userData.map((user) => user.lastName);
// const Age = userData.map((user) => user.age);

// const FullName = userData.map(
//   (user) =>
//     `First Name : ${user.firstName} Last Name : ${user.lastName} and Age : ${user.age}`
// );

// console.log(FirstName);
// console.log(LastName);
// console.log(Age);

// console.log(FullName);

// Any Product on 20% discount for using map method

// const originalPrice = [100, 200, 300, 400];

// const discount = originalPrice.map((price) => price - price * 0.2);
// const discountedPrices = originalPrice.map((price) => price * 0.8);

// console.log(discount);
// console.log(discountedPrices);

// Reduce Method

// 1. Given Number in Total Sum:

// let arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((acumu, currVal) => {
//     return acumu + currVal;
// })

// console.log(sum);

// 2. Given an Array in Find Max NUmber:

const arr = [10, 25, 45, 65, 30, 85, 40];

const Max = arr.reduce((acumu, currVal) => {
  // Without Use Inbuilt Function

  //   if (currVal > acumu) {
  //     return currVal
  //   } else {
  //     return acumu;
  //   }

  // Use Inbuilt Function

  return Math.max(acumu, currVal);
});

console.log(Max);
