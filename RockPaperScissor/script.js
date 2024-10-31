let HumanScore = 0;
let ComputerScore = 0;

const pcSelect = document.getElementById("pc-select");
const humanSelect = document.getElementById("human-select");
const humanScoreElement = document.getElementById("human-score");
const computerScoreElement = document.getElementById("pc-score");
const commentsElement = document.getElementById("comments");

function randomOption() {
  let randomNum = Math.floor(Math.random() * 3);
  let opt = null;
  if (randomNum === 0) {
    opt = "rock";
  } else if (randomNum === 1) {
    opt = "paper";
  } else if (randomNum === 2) {
    opt = "scissors";
  }
  return opt;
}

function onOptionPressed(option) {
  let selected = option;
  let compSelected = randomOption();
  let feedBack = "";

  humanSelect.innerHTML = selected;
  pcSelect.innerHTML = compSelected;

  switch (selected) {
    case "rock":
      switch (compSelected) {
        case "scissors":
          feedBack = "Player wins!";
          HumanScore++;
          break;
        case "paper":
          feedBack = "Computer wins!";
          ComputerScore++;
          break;
        default:
          feedBack = "It's a tie!";
      }
      break;

    case "paper":
      switch (compSelected) {
        case "rock":
          feedBack = "Player wins!";
          HumanScore++;
          break;
        case "scissors":
          feedBack = "Computer wins!";
          ComputerScore++;
          break;
        default:
          feedBack = "It's a tie!";
      }
      break;

    case "scissors":
      switch (compSelected) {
        case "paper":
          feedBack = "Player wins!";
          HumanScore++;
          break;
        case "rock":
          feedBack = "Computer wins!";
          ComputerScore++;
          break;
        default:
          feedBack = "It's a tie!";
      }
      break;
  }

  humanScoreElement.innerHTML = HumanScore;
  computerScoreElement.innerHTML = ComputerScore;
  commentsElement.innerHTML = feedBack;
}
