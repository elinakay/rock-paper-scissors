// Function to get the user's choice and validate it
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
// Check if the user input is valid (rock, paper, scissors, or secret choice 'bomb')
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error: wrong input');
  }
}

// Function to get the computer's random choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
  } 
}

// Function to determine the winner based on user and computer choices
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'User won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'User won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'User won!';
    }
  } 
  // Special case: user chooses 'bomb'
    if (userChoice === 'bomb') {
    return 'User won!';
  }
}

// Function to play the game
function playGame() {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`Computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

// Start the game
playGame();
