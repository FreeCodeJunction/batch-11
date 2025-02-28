const users = [];

document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    users.push({
      name: "ahnaf",
      age: 22,
    });
    location.href = "./../dashboard.html";
  });

export { users };
