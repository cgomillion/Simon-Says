console.log('Simon Says')


// reference video : 
// Simon Game JavaScript Tutorial for Beginners
// https://www.youtube.com/watch?v=n_ec3eowFLQ&t=147s
// need variables for my moves, simons moves, the flashing of the panels, boolean if it is correct, boolean if you are a winner, setting a variable to the interval, if the board is on/active (the user can only input when the board is on/active.), and for the score starting at 0.

let userLevel = 0;
let userInput = [];
let simonInput = [];
let flashAction;
let correct;
let simonTurn;
let winner;
let interval;
let on = true;
let score = 0;

// accessing html elements with jQuery

const $levelCounter = $('.count');
const $score = $('.score');
const $topLeftBlue = $('.top-left-blue');
const $topRightGreen = $('.top-right-green');
const $bottomLeftRed = $('.bottom-left-red');
const $bottomRightYellow = $('.bottom-right-yellow');
const $startButton = $('.startButton');

$(() => {
function playGame() {
    winner = false;
    simonInput = []; 
    userInput = [];
    flashAction = 0;
    interval = 0;
    userLevel = 1;
    score = 0;
    $levelCounter.text(`Level : ${userLevel}`);
    $score.text(`Score: ${score}`);
    console.log(userLevel);
    correct = true;

    for (let i = 0; i < 20; i++) {
        simonInput.push(Math.floor(Math.random() * 4) + 1);
    }
    console.log(simonInput);
    simonTurn = true;
    interval = setInterval(gameLevel, 800);
}

// function for one game level

function gameLevel() {
  // turn the board off so simon can go first then the user. only accepts user click when board is active.

  on = false; 

  // user input for a game level

    if (flashAction === userLevel) {
        clearInterval(interval);
        simonTurn = false;
        clearBoard();
        on = true;
    }

    // simons turn , simons moves are made at the start of the index.html ref. line 43 . Simon starts with the first item in his array of inputs and at the end of each of his turns, it increments to the next index.

    if (simonTurn === true) {
        clearBoard();
        setTimeout(() => {
            if (simonInput[flashAction] === 1) oneBlue();
            if (simonInput[flashAction] === 2) twoGreen();
            if (simonInput[flashAction] === 3) threeRed();
            if (simonInput[flashAction] === 4) fourYellow();
            flashAction++;
        }, 300);
    }
}

//functions for panels changing lighting up

function oneBlue() {
    $topLeftBlue.css('background-color', 'lightblue')
}

function twoGreen() {
    $topRightGreen.css('background-color', 'lightgreen')
}

function threeRed() {
    $bottomLeftRed.css('background-color', 'lightcoral')
}

function fourYellow() {
    $bottomRightYellow.css('background-color', 'yellow')
}

// function to rest board

function clearBoard() {
    $bottomRightYellow.css('background-color', 'goldenrod');
    $bottomLeftRed.css('background-color', 'darkred');
    $topRightGreen.css('background-color', 'darkgreen');
    $topLeftBlue.css('background-color', 'darkblue');
}

// function for winning game board

function winnersBoard() {
    $bottomRightYellow.css('background-color', 'yellow');
    $bottomLeftRed.css('background-color', 'lightcoral');
    $topRightGreen.css('background-color', 'lightgreen');
    $topLeftBlue.css('background-color', 'lightblue');
}

// event listeners w/jquery to log user clicks

$($topLeftBlue).click(() => {
    if (on) {
      userInput.push(1);
      checkMatch();
      oneBlue();
      score++;
      $score.text(`Score: ${score}`);
      if(!winner) {
        setTimeout(() => {
          clearBoard();
        }, 300);
      }
    }
  })

$($topRightGreen).click(() => {
    if (on) {
      userInput.push(2);
      checkMatch();
      twoGreen();
      score++;
      $score.text(`Score: ${score}`);
      if(!winner) {
        setTimeout(() => {
          clearBoard();
        }, 300);
      }
    }
  })

$($bottomLeftRed).click(() => {
    if (on) {
      userInput.push(3);
      checkMatch();
      threeRed();
      score++;
      $score.text(`Score: ${score}`);
      if(!winner) {
        setTimeout(() => {
          clearBoard();
        }, 300);
      }
    }
  })


$($bottomRightYellow).click(() => {
    if (on) {
      userInput.push(4);
      checkMatch();
      fourYellow();
      score++;
      $score.text(`Score: ${score}`);
      if(!winner) {
        setTimeout(() => {
          clearBoard();
        }, 300);
      }
    }
  })

// function to check if user input is correct

function checkMatch() {
    if (userInput[userInput.length - 1] !== simonInput[userInput.length - 1])
    correct = false;

    // win condition

    if (userInput.length === 6 && correct && score >= 15) {
        winGame();
    }

    // lose condition

    if (correct === false) {
        $levelCounter.text(`GAME OVER`);
        $levelCounter.css('margin-left', '66px');
    }

    // if you correctly complete the round but don't meet the win condition yet

    if (userLevel === userInput.length && correct && !winner) {
        userLevel++;
        userInput = [];
        simonTurn = true;
        flashAction = 0;
        $levelCounter.text(`Level : ${userLevel}`);
        $score.text(`Score: ${score}`);
        interval = setInterval(gameLevel, 800);
      }
}

// winGame function 

function winGame() {
    winnersBoard();
    $levelCounter.text(`WINNER`);
    $score.css('margin-left', '85px');
    $levelCounter.css('margin-left', '83px');

    on = false;
    winner = true;
}

// on the click of the start button you begin the game

$($startButton).click(() => {
    if (on|| winner) {
    playGame();
    }
})


})

