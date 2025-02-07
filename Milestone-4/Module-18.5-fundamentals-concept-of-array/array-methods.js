// push method
// this method adds elements to the last of the array and returns the new length
const arrayOne = ["ahnaf", "mottaki", "morshed", "sarker"];
console.log(arrayOne.push("arpon"), arrayOne);

// the pop method
// !the pop method removes the last element of the array and returns the removed element
console.log(arrayOne.pop(), arrayOne);

// unshift method
// this method adds element to the first  and its returns the new length
console.log(arrayOne.unshift("arpon"), arrayOne);

// shift method
// this method remove the first element from the array and returns the removed element
console.log(arrayOne.shift(), arrayOne);

// includes method
// returns true if the desired element exists in the array
const friends = ["ahnaf", "mottaki", "morshed", "sarker"];
console.log(friends.includes("ahnaf"));
if (friends.includes("morshed")) {
  console.log("Morshed is included in the array");
}

// index of method
// returns the index of the desired element . If the element doesn't exists then it returns -1
if (friends.indexOf("morshed") != -1) {
  console.log(friends[friends.indexOf("morshed")]);

  console.log("Morshed" + " is included in the array");
}
