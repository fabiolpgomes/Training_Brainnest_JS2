const userChoiceDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const gameGrid = document.getElementById("game");

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;

const handleClick = (e) => {
  //console.log('clicked')
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = "User choice: " + userChoice;
  computerPlay();
  getResult();
};

const computerPlay = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = "Computer Choice: " + computerChoice;
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.innerHTML = choices[i];
  button.id = choices[i];
  button.addEventListener("click", handleClick);
  gameGrid.appendChild(button);
}

const getResult = () => {
  if (userChoice === computerChoice) {
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
};

