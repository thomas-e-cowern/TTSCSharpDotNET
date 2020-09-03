$(document).ready(function(){

  console.log('JQuery is working');

  // set up variable for computer and player hand
  var computerHand = "";
  var playerHand = "";

  // default hide the player hands
  $("#playerHands").hide();

  $("#play").click(function(){

    // set up array for possible game options
    const hands = ["rock", "paper", "scissors"];

    // default hide the results section
    $("#results").hide();

    // hide the play button now that play is on
    $("#play").hide();

    // generate the computer hand
    function getComputerHand () {
      let x = 0;
      x = parseInt(Math.random()*10)%3;
      return hands[x];
    }

    computerHand = getComputerHand();

    // now that we're playing, show the player hands
    $("#playerHands").show();

    $("#rock, #paper, #scissors").click(function () {
      if (this.id == "rock") {
        playerHand = "rock";
      } else if (this.id == "paper") {
        playerHand = "paper";
      } else if (this.id == "scissors") {
        playerHand = "scissors";
      }

      // hide the player hands
      $("#playerHands").hide();

      // display the hands chosen on the page
      $("#results").show();
      $("#playerHand").html("Player has chosen " + playerHand);
      $("#computerHand").html("Computer has chosen " + computerHand);

      // calll compare function to determine winner and display
      let winner = compare(computerHand, playerHand);

      $("#winner").html(winner);

      $("#play").show().html("Click to play again...");

    });

    function compare (choice1, choice2) {
      if (choice1 == "rock" && choice2 == "scissors" || choice1 == "paper" && choice2 == "rock" || choice1 == "scissors" && choice2 == "paper") {
        return ["Computer wins!"];
      } else if (choice2 == "rock" && choice1 == "scissors" || choice2 == "paper" && choice1 == "rock" || choice2 == "scissors" && choice1 == "paper") {
        return ["Player wins!"];
      } else {
        return ["It's a draw!"];
      }
    }
  })
})