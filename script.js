const choices = ["R", "P", "S"];
let userWins = 0;
let computerWins = 0;
let ties = 0;

function letsPlay() {
  let userInput = window.prompt("Type R, P or S");

  userInput = userInput.toUpperCase();

  if (userInput !== "R" && userInput !== "P" && userInput !== "S") {
    window.alert("Please enter a valid character");
    letsPlay();
  }

  const computerChoiceIndex = Math.floor(Math.random() * 3);

  const computerChoice = choices[computerChoiceIndex];

  window.alert(`Computer choose ${computerChoice}`);

  if (computerChoice === userInput) {
    window.alert("It's a tie");
    ties++;
  } else if (
    (userInput === "R" && computerChoice === "S") ||
    (userInput === "S" && computerChoice === "P") ||
    (userInput === "P" && computerChoice === "R")
  ) {
    window.alert("Winner");
    userWins++;
  } else {
    window.alert("You lose");
    computerWins++;
  }

  if (
    window.confirm(
      `Wins: ${userWins} | Losses: ${computerWins} | Ties: ${ties}. Try again?`
    )
  ) {
    letsPlay();
  } else {
    return;
  }
}

letsPlay();
