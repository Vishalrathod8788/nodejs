var prompt = require('prompt-sync')();

console.log("Enter Your Age");
var age = prompt();
if(age>=18){
    console.log("You are eligible for voting");
}
else{
    console.log("You are not eligible for voting");
}