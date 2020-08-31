function letterCount (letter, phrase) {
  var count = 0;
    var phraseArray = phrase.toLowerCase().split("");
    console.log(phraseArray);
    for (let x = 0; x < phraseArray.length; x++) {
      if (letter == phraseArray[x]) {
        count = count + 1
      }
    }
    return "The count of " + letter + " is " + count;
}

console.log(letterCount("i", "This is the phrase through which I will search"));