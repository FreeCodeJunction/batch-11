console.log("adding js inside the html file");
console.log(document);

const listItems = document.getElementsByTagName("li");
for (const list of listItems) {
  list.style.color = "green";
}

const fruitHeading = document.getElementById("fruit-heading");
fruitHeading.style.color = "skyblue";

const importantPlaces = document.getElementsByClassName("important-places");
for (const place of importantPlaces) {
  place.style.backgroundColor = "black";
  place.style.color = "white";
  place.style.paddingBlock = "10px";
}
