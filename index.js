// var num = 15;
// var newNum = num++;
// var fnlNum = newNum++;
// console.log(num);
// console.log(newNum);
// console.log(fnlNum);

// Turnery Operator :

// var age = 15;

// console.log(age >= 18 ? "You can Vote" : "You can't Vote");

// Function
// function sum(){
//     var a = 10, b = 20;
//     console.log(a + b);
// }

// sum();

// Parameters with Function

// function sum(a, b) /* in this function in a and b is a parameters */ {
//   var total = a + b;
//   console.log(total);
// }

// sum(30, 40); // this calling function in 30 and 40 is a arguments
// sum(5, 10);
// sum(100, 200);
// sum(500, 600);

// DRY --> Do Not Repeat Your Self

// Function Expression

function sum(a, b) {
  var total = a + b;
  console.log(total);
}
var total = sum(30, 40);
total; // this is expression
