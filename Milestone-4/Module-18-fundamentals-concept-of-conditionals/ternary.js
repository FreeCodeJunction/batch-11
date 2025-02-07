// ternary operator
const age = 20;
// if (age >= 18) {
//   console.log("You can vote.");
// } else {
//   console.log("You need to be 18 years old");
// }

// condition ? do something when condition is true : do something when condition is false
// console.log(age >= 18 ? "You can vote" : "Ghumai Thako");

let price = 500;
const isLeader = false;
// price = isLeader ? 0 : price + 100;
// if (isLeader) {
//   price = 0;
// } else {
//   price += 100;
// }

// console.log(price);

// semi advance ternary
price = isLeader ? (price > 1000 ? price / 2 : 0) : price + 1000;
console.log(price);
