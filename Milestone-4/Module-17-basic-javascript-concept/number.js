var orangePrice = 20;
var chocolate = 0.5;
var applePrice = "26";
// changing types of variables
applePrice = parseInt(applePrice);
var changingFloat = parseInt(22.432);
var changingInt = parseFloat(3476.33);
console.log(changingInt, changingFloat);
// toFixed change type to string
console.log(changingFloat.toFixed(2));
const num = 50 / 0;
console.log(num);
console.log(orangePrice);
console.log(orangePrice + applePrice);
console.log("type of " + orangePrice + ": " + typeof orangePrice);
console.log("type of " + applePrice + ": " + typeof applePrice);
