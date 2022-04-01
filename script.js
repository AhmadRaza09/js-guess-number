'use strict';

const produceRandomNumber = function (range) {
  return Math.trunc(Math.random() * range) + 1;
};

const initialState = function () {
  score = initialScore;
  secretNumber = produceRandomNumber(50);
  //   console.log(secretNumber);
  document.querySelector('body').style = 'background-color: #222;';
  document.querySelector('.number').style = 'width: 15rem; padding: 3rem 0rem;';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = initialScore;
  document.querySelector('.guess').value = '';
  document.querySelector('.between').textContent = selectNumberOption;
};

//set the game state when user wins
const wins = function () {
  document.querySelector('.number').style = 'width: 35rem; padding: 4rem 0rem;';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style = 'background-color: #60b347;';
  document.querySelector('.message').textContent = '🎉Correct Number!';
  if (hightScore < score) {
    hightScore = score;
    document.querySelector('.highscore').textContent = hightScore;
  }
};

//set the game state when user guess incorrect number
const notGuessCorrect = function (message) {
  // if score > 1 then decrease score otherwise revert game to intial state
  if (score > 1) {
    document.querySelector('.message').textContent = message;
    document.querySelector('.score').textContent = --score;
  } else {
    document.querySelector('.message').textContent = '😣You lost game!';
    document.querySelector('.score').textContent = 0;
  }
};

// events

//event for check btn
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //if user not enter valid number
  if (!guess || !(guess >= initialNumber && guess <= finalNumber)) {
    document.querySelector('.message').textContent =
      '🙄Please select number between 1 and 20';
  }
  //if number = guess
  else if (guess === secretNumber) {
    wins();
  }
  //if number greater the guess
  else if (guess > secretNumber) {
    notGuessCorrect('📈Too high!');
  }
  //if number less than guess
  else if (guess < secretNumber) {
    notGuessCorrect('📉Too low!');
  }
});

//event for again btn
document.querySelector('.again').addEventListener('click', initialState);

//variables

//store the score for the user to start game
const initialNumber = 1;
const finalNumber = 100;
const selectNumberOption = `(Between ${initialNumber} and ${finalNumber})`;
const initialScore = 100;

let hightScore = document.querySelector('.highscore').textContent;

//store the the guess number
let secretNumber = '';
// console.log(secretNumber);

//store the score of the user
let score = 100;
initialState();
