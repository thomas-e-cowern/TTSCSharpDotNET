
function greetOnLoad () {
  var name = prompt("Hi! What's your name?");
  greeting.innerHTML= "Hello " + name + ", it's nice to meet you!";

  var randomNumberResult = Math.floor((Math.random() * 10) + 1);
  randomNumber.innerHTML = "Todays random number is " + randomNumberResult;
}

greetOnLoad();

var state = 0;

function modifyColor() {
  if (state == 0) {
    document.getElementById("example").style.color = "aqua";
    document.getElementById("example").style.backgroundColor = "gray";
    state = 1;
  } else {
    document.getElementById("example").style.color = "black";
    document.getElementById("example").style.backgroundColor = "white";
    state = 0;
  }
  
}
