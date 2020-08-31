function reverseNumber (number) {
  var reversedArray = [];
  var firstItem = "";

  stringNumber = number.toString();
  stringArray = stringNumber.split("");

  while (stringArray.length > 0) {
    firstItem = stringArray.shift();
    reversedArray.unshift(firstItem);
  }
  
  stringResult = reversedArray.join("");
  console.log("RA: " + stringResult);
  var answer = parseInt(stringResult);

  return answer;
}

console.log(reverseNumber(987654));
