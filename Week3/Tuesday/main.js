
function greetOnLoad () {
  let storedName = localStorage.getItem("name");
  if (storedName === "null") {
    var name = prompt("Hi! What's your name?");
    greeting.innerHTML= "Hello " + name + ", it's nice to meet you!";
    localStorage.setItem('name', name);
  } else {
    greeting.innerHTML= "Hello " + storedName + ", it's nice to meet you!";
  }
  console.log("the stored name is " + storedName);
  

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

function clearLocalStorage() {
  localStorage.setItem('name', null);
}
