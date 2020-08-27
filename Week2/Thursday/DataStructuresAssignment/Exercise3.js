// Write a JavaScript program to compute the sum and product of an array of integers.

var myIntegers = [1, 2, 5, 8, 9, 13, 19];

// Sum of the array
var sumOfArray = myIntegers.reduce((a, b) => {
    return a + b;
}, 0);

// Product of the array
var productOfArray = myIntegers.reduce((a, b) => {
  return a * b;
 }, 1);

console.log("The sum of myIntegers is " + sumOfArray);
console.log("The product of myIntegers is " + productOfArray);