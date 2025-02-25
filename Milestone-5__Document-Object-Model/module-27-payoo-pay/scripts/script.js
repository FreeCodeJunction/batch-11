const loginBtn = document.getElementById("login-btn");
const accountNumber = document.getElementById("account-number");
const accountPin = document.getElementById("account-pin");
loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const accountNum = accountNumber.value;

  const pin = Number(accountPin.value);
  if (accountNum.length === 11 && pin === 1234) {
    location.href = "./../main.html";
    accountNumber.value = accountPin.value = "";
  }
});
const main = document.querySelector("main");
console.log(main.value);
