// const word = ["hello", "world"];

// const toUpper = word.map((currVal) => currVal.toUpperCase());

// console.log(toUpper);

// const number = [5, 12, 8, 130, 44];

// const filterNum = number.filter((currVal) => {
//   return currVal > 10;
// });

// console.log(filterNum);

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 30 },
// ];

// const filterUser = people
//   .filter((currUser) => currUser.age > 18)
//   .map((currUser) => currUser.name);

// console.log(filterUser);

let str1 = "Vishal";
let str2 = "code";

const MergeStr = (str1, str2) => {
  let ans = "";
  for (let i = 0; i < str2.length; i++) {
    ans += str1[i] + str2[i];
  }
  ans += str1.slice(str2.length);

  return ans;
};
