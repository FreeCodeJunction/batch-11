// const num1 = 12;
// const num2 = 22;
// const num3 = 54;
// const num4 = 77;

// array
// const numbers = [num1, num2, num3, num4];
const numbers = [12, 22, 54, 77];
// console.log(numbers);

// array can holds any of kind of data
const universalArray = ["String", 34, false, numbers];
console.log(universalArray);

// check the length of the array
console.log("The length of the Universal Array is: " + universalArray.length);

// getting and setting every property with the index of the array
// remember array index starts with zero (0)
// getting the first item of the array

console.log("The first item of the array is: " + universalArray[0]);

// getting the last item of the array
console.log(
  "The last item of the array is: ",
  universalArray[universalArray.length - 1]
);

// set or update element values of array
const letters = [88, 46, 103, true, "ahnaf mottaki"];
// changing the first element of the array
letters[0] = "Changed";
console.log("The first element of the array is:" + letters[0]);

// changing the last element of the array
letters[letters.length - 1] = "Morshed Sarker";
console.log("The last element of the array is: " + letters[letters.length - 1]);
