const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button"); // all button elements
let userChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or I can use possibleChoice.length
  console.log(`Computer random number:  ${randomNumber}`);

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Drawn";
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "sscissors")
  ) {
    result = "The computer won!";
  } else {
    result = "The user player WON!";
  }
  resultDisplay.innerHTML = result;
}

/*


if (userChoice === computerChoice) {
  console.log("Drawn!");
} else if (
  (userChoiceDisplay === "rock" && computerChoiceDisplay === "paper") ||
  (userChoiceDisplay === "scissors" && computerChoiceDisplay === "rock") ||
  (userChoiceDisplay === "paper" && computerChoiceDisplay === "scissors")
) {
  console.log("The computer won!");
} else {
  console.log("The user player won!");
}




let scorePlayer = 0;
let scoreComputer = 0;
// Computer Selection
function computerPlay() {
  let randomComputer = Math.floor(Math.random() * 3);
  console.log(randomComputer);

  switch (randomComputer) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissor";
      break;
  }
}

// Player selection
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("DRAW");
    return "draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    console.log("Player won the round");
    return "player";
  } else {
    console.log("Computer won the round");
    return "computer";
  }
}

//Player input choose
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Do you choose rock, paper or scissor?");
    while (
      !(
        playerSelection.toLowerCase() === "paper" ||
        playerSelection.toLowerCase() === "rock" ||
        playerSelection.toLowerCase() === "scissor"
      )
    ) {
      playerSelection = prompt(
        "Try again please! Do you choose rock, paper or scissors?"
      );
    }
    console.log(`You chose ${playerSelection}`);
    let computerSelection = computerPlay();
    console.log("computer chose " + computerSelection);
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === "player") {
      scorePlayer++;
    } else if (roundResult === "computer") {
      scoreComputer++;
    }
  }

  //Who is the winner
  if (scoreComputer == scorePlayer) {
    console.log("It's a draw!");
  } else if (scoreComputer > scorePlayer) {
    console.log("Compute is the winner!");
  } else {
    console.log("You are the winner!");
  }
  console.log(`the score is: Computer: ${scoreComputer} You: ${scorePlayer}`);
}

game();

*/
