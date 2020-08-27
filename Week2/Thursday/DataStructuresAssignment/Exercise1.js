// Write a JavaScript function to clone an array.

let originalArray = [["Red", "Blue"], ["Green", "Alpha"]];

// Clone one
var cloneOne = originalArray.map((x) => x);
console.log(originalArray);
console.log(cloneOne);

// Deep two
var cloneTwo = JSON.parse(JSON.stringify(originalArray));

console.log(originalArray);
console.log(cloneTwo);