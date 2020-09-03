$(document).ready(function(){

  console.log('JQuery is working');

  $("#play").click(function(){

    // set up array for possible game options
    const hands = ["rock", "paper", "scissors"];

    // generate the computer hand
    function getComputerHand () {
      let x = parseInt(Math.random()*10)%3;
      console.log(hands[x]);
      return hands[x];
    }

    getComputerHand();

  })
})



function getPlayerHand () {
  let hand = prompt("Enter rock, paper or scissors below", "Enter rock, paper or scissors here").toLowerCase();
  if (hand == "rock" || hand == "paper" || hand == "scissors") {
    let winner = compare(getComputerHand(), hand);
    document.getElementById("results").innerHTML = winner[0];
    document.getElementById("winner").innerHTML = "And the winner is..." + winner[1];
    winner = "";
  } else {
    getPlayerHand();
  }
}

function compare (choice1, choice2) {
  if (choice1 == "rock" && choice2 == "scissors" || choice1 == "paper" && choice2 == "rock" || choice1 == "scissors" && choice2 == "paper") {
    console.log("Computer: " + choice1 + ", Player: " + choice2)
    return ["Computer: " + choice1 + ", Player: " + choice2, "Computer wins!"];
  } else if (choice2 == "rock" && choice1 == "scissors" || choice2 == "paper" && choice1 == "rock" || choice2 == "scissors" && choice1 == "paper") {
    console.log("Computer: " + choice1 + ", Player: " + choice2)
    return ["Computer: " + choice1 + ", Player: " + choice2 ,"Player wins!"];
  } else {
    console.log("Computer: " + choice1 + ", Player: " + choice2)
    return ["Computer: " + choice1 + ", Player: " + choice2, "It's a draw!"];
  }
}

