// console.log('lets go');

/*----- constants -----*/

// From Space Battles
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/*----- app's state (variables) -----*/

let compSequence = [1, 2, 3, 4, 4, 3, 2, 1];
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

flexboxContainerEl.addEventListener('click', Highlight);
strtBtn.addEventListener('click', startGame);
rstBtn.addEventListener('click', init);
// aboutEl.addEventListener('click', )

/*----- functions -----*/

// function to initialize the game
function init() {
	compSequence = [];
	playerSequence = [];
	addNumberToComp();
}

init();

// function to start game
function startGame() {
	//Get ready modal would be nice...stretch
	displayCompSequence();
}
// function to push players input into their array
function gatherPlayersSequence() {
	console.log('box one');
}
// function to push random number into computer's array.
function addNumberToComp() {
	compSequence.push(getRandomNumber(1, 4));
}
// function to display compSequence array
function displayCompSequence() {
	for (let i = 0; i < compSequence.length; i++) {
		setTimeout(() => {
			if (compSequence[i] === 1) {
				highlightBox(box1El);
			}
			if (compSequence[i] === 2) {
				highlightBox(box2El);
			}
			if (compSequence[i] === 3) {
				highlightBox(box3El);
			}
			if (compSequence[i] === 4) {
				highlightBox(box4El);
			}
		}, 1000 * i);
	}
}

// function to make clicked button flash
function Highlight(event) {
	event.target.style.filter = 'brightness(200%)';
	setTimeout(function () {
		event.target.style.filter = 'brightness(100%)';
	}, 350);
	// Take whatever is clicked and push into player array
	playerSequence.push(event.target.dataset.boxNumber);
    console.log(playerSequence)
}

//function to highlight button from array
function highlightBox(boxElement) {
	boxElement.style.filter = 'brightness(200%)';
	setTimeout(function () {
		boxElement.style.filter = 'brightness(100%)';
	}, 500);
}

/*----- game logic -----*/
if (compSequence === playerSequence) {
	addNumberToComp;
} else {
	console.log('you lose');
}

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
