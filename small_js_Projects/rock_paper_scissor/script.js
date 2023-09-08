document.addEventListener("DOMContentLoaded", function (event) {
  const computerChoiceDisplay = document.getElementById("computer-choice");
  const userChoiceDisplay = document.getElementById("user-choice");
  const resultDisplay = document.getElementById("result");

  const possibleChoices = document.querySelectorAll("button");
  let userChoice;
  let computerChoice;
  let result;

  possibleChoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener("click", (e) => {
      userChoice = e.target.innerText;
      userChoiceDisplay.innerHTML = userChoice;
      generateComputerChoice();
      getResults();
    })
  );

  const generateComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    console.log(randomNumber);

    if (randomNumber === 1) {
      computerChoice = "Rock";
    }
    if (randomNumber === 2) {
      computerChoice = "Scissors";
    }
    if (randomNumber === 3) {
      computerChoice = "Paper";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
  };

  const getResults = () => {
    if (computerChoice === userChoice) {
      result = "It's draw";
    }
    else if (computerChoice === "Rock" && userChoice === "Paper") {
      result = "You Won ";
    }
    else if (computerChoice === "Rock" && userChoice === "Scissors") {
      result = "You Lost";
    }
    else if (computerChoice === "Paper" && userChoice === "Rock") {
      result = "you lost ";
    }
    else if (computerChoice === "Paper" && userChoice === "Scissors") {
      result = "you Won ";
    }
    else if (computerChoice === "Scissors" && userChoice === "Rock") {
      result = "you won ";
    }
else if (computerChoice === "Scissors" && userChoice === "Paper") {
      result = "you Lost ";
    }

    resultDisplay.innerHTML = result;
  };
});
