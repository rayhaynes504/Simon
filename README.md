# Project 1 - Simon

## App Screenshot
￼

## Technologies Used
- Visual Studio Code
- JavaScript
- CSS
- HTML
- GitHub
- Google Chrome


## Installation Instructions
- Download and install Visual Studio Code
    - Install Live Server Extension in Visual Studio Code
- Fork and clone the repository https://github.com/rayhaynes504/simon
- Open file “index.html” in Visual Studio Code
- Start Live Server by clicking “Go Live” on the bottom toolbar of Visual Studio Code
    - A new window will pop up in your web browser and you are ready to play, locally!


## Project Descritpion
Simon is a game of memory where a sequence of colors are displayed and the user has to accurately replicate the sequence. After successful replication, the computer displays another sequence that is incrementally tougher (by being a longer length than the previous sequence). The user repeats the next sequence and the process continues until the user can no longer successfully repeat the sequence given my the computer.  


## User Stories
### MVP
- As a user, I would like a brief description of how to play the game before it starts
- As a user, I want to be able to control when the game starts, so it begins when I’m ready
- As a user, I want my current level displayed so I can know which level I am on
- As a user, I want to be able to restart the game, to give me total control 
- As a user, I want to be alerted when I guess a sequence incorrectly
- As a user, I would like a prompt between each level so I can gather myself for the next challenge

### Bronze

### Silver
- As a user, I would like to enter my name so I can be directly addressed my the computer
- As a user, I would like a time limit between sequence recalls clicks to add a challenge to the game
- As a user, I would like to start at a specific level (number of steps in a sequence) so I can get straight to the challenging part
- As a user, I would like to retry to current level I was on If I lose rather than automatically starting from the beginning so I can have more control during the game. 
### Gold
- As a user, I would like the colors to flash faster as the levels progress
- As a user, I would like the time limit between sequence recalls clicks to get short as I progress further to add a challenge to the game


## Wire Frames
### Welcome Page

￼
### Gameplay Screen
(these colors in the box will flash)
￼
### About Modal

￼



## Major Hurdles

### Compare Sequences Function
The biggest hurdle I had to overcome was with my compare sequences function. The purpose of this function is to compare the computer generated sequence, which is stored in an array, to the user generated sequence, which is stored in a separate array. If the two player’s input equals the computer generated sequence, then the game should progress to the next level and add another element into the computer generated array (making the sequence for the user to repeat longer). I had two issues with this function.
	1. After debugging with a plethora of console logs, I realized I was trying to compare two different types of data. I added a dataset attribute to my block elements with a value of 1-4, respectively, to easily push that value into my player sequence array for the comparison function. The dataset values were strings and the values in the computer generated array were numbers. Of course, those two values will never be strictly equivalent “===“. The parseInt() function took care of this problem to give me the same data types to compare.
 
	2. Arrays cannot be compared against each other . They are only references that point to data (objects as well). They have no true value. Only strings, numbers and booleans can be compared against each other. I found this out the hard way. Taking my arrays and using the toString() method solved this problem for me. I could’ve also stored the player’s and computer’s sequence data as a string to circumvent this problem. 

### Getting the game blocks to flash sequentially
I had minor issues getting the game blocks to flash on the trigger of a user click. I thought to tackle this first because I would incorporate parts of that event listener function. Upon googling, I seen I could trigger the blocks to get brighter by using “element.style.filter = ‘brightness(x%)’. Anything over 100% would brighten the style and below 100% would darken it. To make this effect temporary, I set it within a timeout function to bring the brightness down to its original setting. 

Getting the computer sequence to display sequentially was another high hurdle to jump. Initially I thought setting a for loop with a setTimeout function would achieve my desired outcome, but I was wrong. The computer reads through the data too fast so what happened is all buttons would flash together, at the interval I set. Thanks to Esin, I learned to wrap my logic (including the for loop) inside of my setTimeout function and set the time interval to “my desired time * i.” Having it set like this still had the computer read everything extremely fast, but it delayed the display of each iteration by the multiple of i. The first iteration was instantaneous (my time * 0), the second (my time * 1), (my time * 2), etc. 
