'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; //Defining the highest limit of the secret number to be guessed.

let score = 20; // The initial score of trials dropping by 1 with every wrong guess.
//We used let because the number will be decreasing with every wrong guess. A const is IMMUTABLE.

let highscore = 0; //Defining the high score

//Function for .message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //WHEN THERE IS NO INPUT.
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    //WHEN PLAYER WINS THE GAME.
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage('🎉Correct Number! Frankie says Congratulations to you 🦍');

    document.querySelector('.number').textContent = secretNumber;

    //If the guess === secretNumber, the background color of the body changes as set below.
    document.querySelector('body').style.backgroundColor = '#60b347';

    //If the guess === secretNumber, the width of the .number changes as set below
    document.querySelector('.number').style.width = '30rem';

    //IMPLEMENTING THE HIGH SCORE under the winning if block of code
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //REFACTORING OUR CODE WITH TERNARY OPERATORS AND COMMENTING OUT THE LARGER CODE BELOW
    //WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    //If the input number is greater or lesser than the secret number, either of this text shows.
    displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low!');

    score--;
    document.querySelector('.score').textContent = score;
  } else {
    //If the score trial is less than 1, this message shows
    displayMessage('Ahaaaaa 💥 You lost the game');

    document.querySelector('.score').textContent = 0;
  }

  /*
    //WHEN THE GUESS IS TOO HIGH.
  } else if (guess > secretNumber) {
    if (score > 1) {
      //If the score trials is greater than 1, this text shows.
      document.querySelector('.message').textContent = '📈 Too High';
      //score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //If the score trial is less than 1, this message shows
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    //WHEN THE GUESS IS TOO LOW.
  } else if (guess < secretNumber) {
    if (score > 1) {
      //If the score trials is greater than 1, this text shows.
      document.querySelector('.message').textContent = '📉 Too Low!';
      //score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //If the score trial is less than 1, this message shows
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

//IMPLEMENTING THE AGAIN BUTTON TO RESTART THE GAME WITHOUT RELOADING THE PAGE/BROWSER
document.querySelector('.again').addEventListener('click', function () {
  //Setting the variable of score to 20.
  score = 20;

  //Generating a new secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Restoring the initial .message back to default
  displayMessage('Start Guessing...');

  //Restoring the initial value of the .score back to 20
  document.querySelector('.score').textContent = score;

  //Restoring the .number/secretNumber back to the hidden with the ? mark
  document.querySelector('.number').textContent = '?';

  //Restoring the input field back to an empty string/Nothing
  //Always remember that the value of an input IS ALWAYS A STRING.
  document.querySelector('.guess').value = '';

  //Restoring the backgroundColor to the initial state
  document.querySelector('body').style.backgroundColor = '#222';

  //Restoring the width of the .number to its initial state
  document.querySelector('.number').style.width = '15rem';

  //Ensures the High Score stays updated even if user refreshes his page
  document.querySelector('.highscore').textContent = highscore;
});
