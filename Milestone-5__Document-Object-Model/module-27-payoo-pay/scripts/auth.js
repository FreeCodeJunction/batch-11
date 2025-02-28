import { users } from "./script.js";

document.getElementById("balance").addEventListener("click", function (event) {
  console.log(users);
  console.log("balance clicked");
});

console.log(users);
