// let x = "b";
// let y = "a";

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

// String

// Escap Character :

// console.log("Hey I'm Vishal, I'm Softwere Developer");

// console.log("\t This is Tab Escape Character Use");

// console.log("Hey There! \nI'm Vishal.");

// Find String in a String

// Most Common Usefull Method!
// 1. indexOf() // Return First Index of String
// 2. lastIndexOf() // Return Last Index of String
// 3. includes() // Return True or False
// 4. startsWith() // Return True or False
// 5. endsWith() // Return True or False
// 6. search() // Return Index of String
// 7. match() // Return Array of String
// 8. matchAll() // Return Array of String
// 9. replace() // Replace String
// 10. replaceAll() // Replace String
// 11. toUpperCase() // Convert String to UpperCase
// 12. toLowerCase() // Convert String to LowerCase
// 13. trim() // Remove White Space
// 14. trimStart() // Remove White Space from Start
// 15. trimEnd() // Remove White Space from End
// 16. slice() // Slice String
// 17. split() // Split String
// 18. concat() // Concat String
// 19. repeat() // Repeat String
// 20. padStart() // Pad String from Start
// 21. padEnd() // Pad String from End
// 22. charAt() // Return Character at Index
// 23. charCodeAt() // Return Unicode of Character at Index
// 24. fromCharCode() // Return String from Unicode
// 25. toString() // Return String
// 26. valueOf() // Return String
// 27. localeCompare() // Compare String

// ------------------Above All Method is case sensitive.------------------

// Above All Method in One live Example write with basic level code
// 1. indexOf()
// let str = "Hello World";
// let index = str.indexOf("World");
// console.log(index);

// 2. lastIndexOf()
// let str = "Hello World";
// let index = str.lastIndexOf("W");
// console.log(index);

// 3. includes()
// let str = "Hello World";
// let check = str.includes("World");
// console.log(check);

// 4. startsWith()
// let str = "Hello World";
// let check = str.startsWith("W");
// console.log(check); // False

// 5. endsWith();
// let str = "Hello World";
// let check = str.endsWith("d");
// console.log(check);

// 6. search()
// let str = "Hello World";
// let search = str.search("");
// console.log(search);

// 7. match();
// const text = "The quick brown fox jumps over the lazy dog";

// console.log("\n--- match() ---");
// console.log(text.match("jump"));
// console.log(text.match(/t/g));

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

// const arr = [10, 25, 45, 65, 30, 85, 40];

// const Max = arr.reduce((acumu, currVal) => {
//   // Without Use Inbuilt Function

//   //   if (currVal > acumu) {
//   //     return currVal
//   //   } else {
//   //     return acumu;
//   //   }

//   // Use Inbuilt Function

//   return Math.max(acumu, currVal);
// });

// console.log(Max);

// Flatting Arrays

// const arr = [
//   ["Vishal", "Rathod"],
//   ["Rahul", "Rathod"],
//   ["Raj", "Rathod"],
//   ["Ramesh", "Rathod"],
// ];

// const flat = arr.reduce((acc, currVal) => {
//     return acc.concat(currVal);
// });

// console.log(flat);

// Counting Occurrences

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const count = fruits.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});

// console.log(count);

// console.log(fruits[1]);

// Real-life example: Calculating total expenses

// const expenses = [
//   { category: "Food", amount: 50.75 },
//   { category: "Transport", amount: 30.0 },
//   { category: "Entertainment", amount: 25.5 },
//   { category: "Food", amount: 40.25 },
//   { category: "Utilities", amount: 100.0 },
// ];

// const totalExpenses = expenses.reduce(
//   (acc, expense) => acc + expense.amount,
//   0
// );

// console.log("Total expenses:", totalExpenses.toFixed(2));

// // Bonus: Grouping expenses by category
// const expensesByCategory = expenses.reduce((acc, expense) => {
//   // Check if category exists, if not, create it
//   if (!acc[expense.category]) {
//     acc[expense.category] = 0;
//   }
//   // Add expense amount to category
//   acc[expense.category] = acc[expense.category] + expense.amount;
//   // Return the updated accumulator
//   return acc;
// }, {});

// console.log("Expenses by category:", expensesByCategory);

// --------------------------------------------------------------------------------------------

// Data Functio

// let currDate = new Date();
// console.log(new Date());

// console.log(new Date().toLocaleDateString());
// console.log(new Date().toString());
// console.log(Date.now());

// let d = new Date(2024, 0, 15, 10, 30, 0);
// console.log(d.toLocaleString());

// --------------------------------------------------------------------------------------------
//                                         OOP in JS
// --------------------------------------------------------------------------------------------

// Object

// let bioData = {
//   Name: {
//     realName: "Vishal",
//     realSurname: "Rathod",
//   },
//   Age: 20,
//   Hobby: "Watching Movies",
//   getData() {
//     console.log(
//       `My name is ${bioData.Name.realName} and My Surname is ${bioData.Name.realSurname} and My Age is ${bioData.Age} and My Hobby is ${bioData.Hobby}`
//     );
//   },
// };
// console.log(bioData.Name.realName);
// bioData.getData();

// --------------------------------------------------------------------------------------------
// Object Distructuring  ES7 2016

// let myData = {
//   myName: "Vishal",
//   mySurname: "Rathod",
//   myAge: 20,
//   myHobby: "Watching Movie",
// };

// let { myName, mySurname, myAge, myHobby } = myData;
// console.log(myName);
// console.log(mySurname);

// Object Dynamic Propertys:

// let myName = "Vishal";
// let myAge = 20;

// const bioData = {
//   [myName]: "Hello, How are You",
//   [16+4] : "is my age",
// };
// console.log(bioData);

// ----------------------------------------------------------------------------------------------------------
// ---------------------------------------------Object Property ES6------------------------------------------
// let myName = "Vishal";
// let myAge = 20;

// const bioData1 = {
//   myName : myName,
//   myAge : myAge,
// };

// const bioData = {
//   myName,
//   myAge,
// };

// console.log(bioData);
// console.log(bioData1);

// Both output will come same :

// ----------------------------------------------------------------------------------------------------------

// -------------------------------------------Spread Operator ES6 --------------------------------------------

// const color = ["Green", "Grey", "Yellow"];

// const myColor = ["Green", "Red", "White", "Grey", "Yellow"];

// const myFavColor = [...myColor];

// console.log(color);
// console.log(myColor);
// console.log(myFavColor);

// ----------------------------------------ES7 Array Prototype include --------------------------------------

// 1. Array Property includes (include method)

// let color = ["red", "green", "yellow", "pink"];
// let isPresent = color.includes("red");
// console.log(isPresent);

// 2. Exponsiation Operator (**)

// let num1 = 4;
// console.log(num1**4);

// ----------------------------------------------- ES8 ------------------------------------------------
// *ES8 Feature*
// 1. String Padding
// 2. Object Value
// 3. Object Entries

// 1. String Padding

// let Name = "Vishal".padEnd(10);
// console.log(Name);

// 2. Object Value

// let Person = {
//   name: "Men",
//   age: 20,
// };

// console.log(Object.values(Person));

// 3. Object Entries

// let Person = {
//   name: "Men",
//   age: 20,
// };

// console.log(Object.entries(Person)); // convert in arrays

// ----------------------------------------------- ES9 ------------------------------------------------

// 1. Spread Operator Using in Object
// 2. Flat Array

// 1. Spread Operator Using in Object

// let Person = {
//   name: "Men",
//   age: 20,
// };

// let Person1 = { ...Person };

// console.log(Person1);

// 2. Flat Array

// let arr = [
//   ["zone1", "zone2"],
//   ["zone3", "zone4"],
//   ["zone5", "zone6"],
//   ["zone7", ["subZone1", "subZone2"], "zone8"],
//   ["zone9", ["subZone1", "subZone2"]],
// ];
// // console.log(arr);
// console.log(arr.flat(Infinity));

// 3. Object.fromEntries

// let Person = {
//   name: "Men",
//   age: 20,
// };

// const arrToObj = Object.entries(Person); // Convert Object to Array
// console.log(Object.fromEntries(arrToObj)); // Convert Array to Object

// ----------------------------------------------- ES2020 ------------------------------------------------

// 1. BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);

// --------------------------------------2014 ES Update feature :- use strict--------------------------------------
// "use strict";

// let x = 3.14;
// console.log(x);

// ----------------------------------------------Advance JS------------------------------------------------

// * Call Back and Higher Oreder Function in Advance JavaScript

// create Simple Calculator Method

// let sum = (num1, num2) => {
//   return num1 + num2;
// };

// let sub = (num1, num2) => {
//   return num1 - num2;
// };

// let multi = (num1, num2) => {
//   return num1 * num2;
// };

// let div = (num1, num2) => {
//   return num1 / num2;
// };

// const Calculator = (num1, num2, operator) => {
//   return operator(num1, num2);
// };

// const ans = Calculator(5, 2, sub); // Calculator is Higher Oder Function and sub() is Call Back Function
// console.log(ans);

// ----------------------------------------------Lexical Scoping------------------------------------------------
// let a = "Hi";

// const first = () => {
//   let b = " How are you ?";

//   const second = () => {
//     let c = " I'm fine Thank you!!";
//     console.log(a + b + c);
//   };
//   second();
//   // console.log(a + b + c);
// };

// first();

// ----------------------------------------------Synchronous JavaScript -------------------------------------------

// const fun2 = () => {
//   console.log("Function 2 is Called");
// };

// const fun1 = () => {
//   console.log("Function 1 is call...");
//   fun2();
//   console.log("Function 1 is call...");
// };

// fun1();

// this example is Synchronous JavaScript

// ----------------------------------------------Asynchronous JavaScript -------------------------------------------

// const fun1 = () => {
//   setTimeout(() => {
//     console.log("Function 1 Called!");
//   }, 1000);
// };

// const fun2 = () => {
//   console.log("Function 2 is Called...");
//   fun1();
//   console.log("Function 2 is Called...");
// };
// fun2();

// ----------------------------------------------Function Curring-------------------------------------------

// Curring Function mean function in function in a function call that mean curring function

// function sum(num1) {
//   // console.log(num1);
//   return function (num2) {
//     // console.log(num1, num2);
//     return function (num3) {
//       console.log(num1+num2+num3);
//     };
//   };
// }

// const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);

// sum(3)(5)(8);

// that's called curring function

// ----------------------------------------------CallBack Hell-------------------------------------------

// setTimeout(() => {
//   console.log("Tast 1 is Completed");
//   setTimeout(() => {
//     console.log("Tast 2 is Completed");
//     setTimeout(() => {
//       console.log("Tast 3 is Completed");
//       setTimeout(() => {
//         console.log("Tast 4 is Completed");
//         setTimeout(() => {
//           console.log("Tast 5 is Completed");
//           setTimeout(() => {
//             console.log("Tast 6 is Completed");
//             setTimeout(() => {
//               console.log("Tast 7 is Completed");
//               setTimeout(() => {
//                 console.log("Tast 8 is Completed");
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// ----------------------------------------------Bouns JSON Section-------------------------------------------


