// console.log('lets go');

/*----- constants -----*/
// From Space Battles
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/*----- app's state (variables) -----*/
let compSequence = [];
let playerSequence = [];
/*----- cached element references -----*/
const flexboxContainerEl = document.querySelector('.flexbox-container');

const box1El = document.querySelector('#flexbox-item1');

const box2El = document.querySelector('#flexbox-item2');

const box3El = document.querySelector('#flexbox-item3');

const box4El = document.querySelector('#flexbox-item4');

const strtBtn = document.querySelector('#strt-btn');

const rstBtn = document.querySelector('#rst-btn');

const aboutEl = document.querySelector('.about');

/*----- event listeners -----*/
//  flexboxContainerEl.addEventListener('click', )
// strtBtn.addEventListener('click', )
// aboutEl.addEventListener('click', )
/*----- functions -----*/
// Need fucntion to push random number into an array after each correct sequence response.
//Need a way to initialize the game
//Need a way to check if user input is the same as the array
// Declare a winner.
// function checkForMatch {
//     if (compSequence === playerSequence) {
//         congrats and continue prompt;
//     if (player continues) {
//         empty playerSequence Array;
//         push getRandomNumber(1, 4) into compSequence;
//     display compSequence;
// receive playerSequence}
//     }
// } else {
//     return try again prompt
// }
// Game flow
// click handler to start game
// make compSequence;
// display compSequence;
// receive playerSequence;
// compare sequences;
// if (sequencesmatch) {
//     congrats, continue? prompt;
//     if (continue === 'yes') {
//     empty player sequence;
//     add another element in compSequence;
//     } else {
//         return alert thanks for playing
//     }
// } else {
//     alert you guessed incorrectly. Thanks for playing.
// }

// box1El.addEventListener('click', function (event) {
// 	box1El.style.filter = 'brightness(200%)';
// 	setTimeout(function () {
// 		box1El.style.filter = 'brightness(100%)';
// 	}, 350);
// });

function clickHighlight(event) {
	event.target.style.filter = 'brightness(200%)';
	setTimeout(function () {
		event.target.style.filter = 'brightness(100%)';
	}, 350);
}

flexboxContainerEl.addEventListener('click', clickHighlight);
