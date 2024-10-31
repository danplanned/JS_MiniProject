const HumanScore = 0;
const ComputerScore = 0;
const pcSelect = document.getElementById("pc-select")[0];

// rock:0 , paper:1 , scissors:2
// rock beats scissors
// scissors beats paper
// paper beats rock

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
  let feedBack = null;

  switch (selected) {

    case "rock":
      switch (compSelected) {
        case "scissors":
          feedBack = "Player wins!";
          break;
        case "paper":
          feedBack = "Computer wins!";
          break;
        default:
          feedBack = "It's a tie!";
      }
      break;

      case "paper":
      switch (compSelected) {
        case "rock":
          feedBack = "Player wins!";
          break;
        case "scissors":
          feedBack = "Computer wins!";
          break;
        default:
          feedBack = "It's a tie!";
      }
      break;

      case "scissors":
      switch (compSelected) {
        case "paper":
          feedBack = "Player wins!";
          break;
        case "rock":
          feedBack = "Computer wins!";
          break;
        default:
          feedBack = "It's a tie!";
      }
      break;

  }






  pcSelect.innerHTML = compSelected;
}
