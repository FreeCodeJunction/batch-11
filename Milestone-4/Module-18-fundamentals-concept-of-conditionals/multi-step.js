// multi label condition
const price = 500;
if (price >= 5000) {
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (price >= 3000) {
  const discount = (price * 5) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log("no discount available");
}

const age = 21;
if (age < 12) {
  console.log("You can eat for free");
} else if (age >= 60) {
  console.log("You got 50% discount");
} else {
  console.log("You won't get any discount");
}
