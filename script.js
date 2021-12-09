/*----- constants -----*/

/*----- app's state (variables) -----*/

let compSequence = [];
let playerSequence = [];
/*----- cached element references -----*/

const flexboxContainerEl = document.querySelector('.flexbox-container');
const box1El = document.querySelector('#flexbox-item1');
const box2El = document.querySelector('#flexbox-item2');
const box3El = document.querySelector('#flexbox-item3');
const box4El = document.querySelector('#flexbox-item4');
const compareBtn = document.querySelector('#compare-btn');
const strtBtn = document.querySelector('#strt-btn');
const rstBtn = document.querySelector('#rst-btn');
const aboutBtn = document.querySelector('#about-game');
const modalEl = document.getElementById('modal');
const closeBtn = document.getElementById('close');
const gameAlertsEls = document.querySelectorAll('.game-alerts');

/*----- event listeners -----*/

flexboxContainerEl.addEventListener('click', Highlight);
strtBtn.addEventListener('click', startGame);
rstBtn.addEventListener('click', init);
compareBtn.addEventListener('click', compareSequences);
aboutBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

/*----- functions -----*/

// function to initialize the game
function init() {
	compSequence = [];
	playerSequence = [];
	addNumberToComp();
	gameAlertsEls[0].style.visibility = 'hidden';
	gameAlertsEls[1].style.visibility = 'hidden';
}
init();
// setTimeout(openModal, 5000);
// function to start game
function startGame() {
	//Get ready modal would be nice...stretch
	playerSequence = [];
	gameAlertsEls[0].style.visibility = 'hidden';
	gameAlertsEls[1].style.visibility = 'hidden';
	displayCompSequence();
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
	playerSequence.push(parseInt(event.target.dataset.boxNumber));
}

//function to highlight button from computer array
function highlightBox(boxElement) {
	boxElement.style.filter = 'brightness(200%)';
	setTimeout(function () {
		boxElement.style.filter = 'brightness(100%)';
	}, 500);
}

// Function to compare sequences
function compareSequences() {
	if (playerSequence.toString() === compSequence.toString()) {
		addNumberToComp();

		gameAlertsEls[0].innerText = 'Correct!';
		gameAlertsEls[1].innerText = 'Click Start Button For Next Level';
		gameAlertsEls[0].style.visibility = 'visible';
		gameAlertsEls[1].style.visibility = 'visible';
	} else {
		gameAlertsEls[0].innerText = 'You lose 😞';
		gameAlertsEls[1].innerText = 'Click Start Button To Retry';
		gameAlertsEls[0].style.visibility = 'visible';
		gameAlertsEls[1].style.visibility = 'visible';
	}
}

// From Space Battles
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function openModal() {
	modalEl.style.display = 'block';
}

function closeModal() {
	modalEl.style.display = 'none';
}

/*----- game logic -----*/

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
