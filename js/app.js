console.log('Testing console')


// reference video : 
// Simon Game JavaScript Tutorial for Beginners
// https://www.youtube.com/watch?v=n_ec3eowFLQ&t=147s
// need variables for my moves, simons moves, the flashing of the panels, boolean if it is correct, boolean if you are a winner, and setting a variable to the interval.
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

function gameLevel() {
    on = false; 

    if (flashAction === userLevel) {
        clearInterval(interval);
        simonTurn = false;
        clearBoard();
        on = true;
    }

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

    if (userInput.length === 6 && correct && score >= 15) {
        winGame();
    }

    if (correct === false) {
        $levelCounter.text(`GAME OVER`);
        $levelCounter.css('margin-left', '66px');
    }

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

function winGame() {
    winnersBoard();
    $levelCounter.text(`WINNER`);
    $score.css('margin-left', '85px');
    $levelCounter.css('margin-left', '83px');

    on = false;
    winner = true;
}


$($startButton).click(() => {
    if (on || winner) {
    playGame();
    }
})


})



















//  // goint to try and use jquery
//     // need a function to get random (Simons) colors, increments with level to start.
//     $(".startButton").click( () => {
//     console.log('clicked registered') 
//     userLevel++
//     $('.count').text(`Level : ${userLevel}`)
//     // for (let i = 0; i <= userLevel; i++) {
//     let randomNum = Math.floor(Math.random * 4)
//         let simonColor = []
//         simonColor.push(colors[randomNum])

//         // need a function to turn the colors grey, then turn back
        
//         let logSimon = () => {
//             $(simonColor).addClass('.active')
//             setTimeout(() => {

//             },500)
//             $(simonColor).removeClass('.active')
//         }
//         // need a function to log the users input
//         logSimon()
//     // }   
// })
//     // needs to start on the click of the Start button, => .startButton
//     // $(".startButton").click( () => {
//     //     console.log('clicked registered') 
//     //     logSimon()
        
//     // })





 

// // check it to Simons if wrong game over



