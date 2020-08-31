let b = function newF(number) {console.log(number);}

b(123);

let calculator = {
	add: function(a,b) {
		return a + b;
  },
  
  subtract: function(a,b) {
    return a - b;
  }
}

calculator.add(2,3) // 5
console.log(calculator.subtract(5,3));

let arrayOfMystery = [
  ["anonymous", "array"],
  { name: "anonymous object" },
  function() { return "Anonymous Function!" }
];

console.log(arrayOfMystery[2]);