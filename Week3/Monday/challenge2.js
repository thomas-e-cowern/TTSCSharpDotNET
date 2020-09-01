const hands = ["rock", "paper", "scissors"];

function getComputerHand () {
  let x = parseInt(Math.random()*10)%3;
  return hands[x];
}

function compare (choice1, choice2) {
  if (choice1 == "rock" && choice2 == "scissors" || choice1 == "paper" && choice2 == "rock" || choice1 == "scissors" && choice2 == "paper") {
    console.log("Choice 1: " + choice1 + ", Choice 2: " + choice2)
    return "Choice 1 wins!"
  } else if (choice2 == "rock" && choice1 == "scissors" || choice2 == "paper" && choice1 == "rock" || choice2 == "scissors" && choice1 == "paper") {
    console.log("Choice 1: " + choice1 + ", Choice 2: " + choice2)
    return "Choice 2 wins!"
  } else {
    console.log("Choice 1: " + choice1 + ", Choice 2: " + choice2)
    return "It's a draw!"
  }
}

console.log(compare(getComputerHand(), "rock"));