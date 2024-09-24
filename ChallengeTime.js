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

var year = 8887;

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

// what difrence between function parameter and function argument

