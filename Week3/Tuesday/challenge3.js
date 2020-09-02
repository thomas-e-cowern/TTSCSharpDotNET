// More Debugging!

// Same as before, work through this code using the Developer Debugging tools

let woolOwners = [
  {
      "master": 1
  },
  {
      "dame": 1
  },
  {
    "little boy": 1,
    "location": "down the lane"
  }
];




let haveYouAnyWool = function() {
    let totalBags = 0;
    for (let i = 0; i < woolOwners.length; i++) {
      totalBags = totalBags + i;
    }
    return (totalBags);
};

let bags = haveYouAnyWool();

function baabaaBlackSheep() {
    console.log("BaaBaa BlackSheep have you any wool?");
    if (bags > 0) {
        console.log("yes sir, yes sir " + bags + " bags full");
  }
}

function oneForMy() {
    for (let i = 0; i < 2; i++) {
        people = Object.keys(woolOwners[i]);
        let person = people.toString();
        console.log("one for my " + person);
    }
}

baabaaBlackSheep();
oneForMy();

let boy = Object.keys(woolOwners[2]);
let littleBoy = boy;

let whereHeLives = woolOwners[2].location;

console.log("one for the " + boy[0] + " that lives " + whereHeLives);