/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice;

scores = [0,0]
roundScore = 0;
activePlayer = 0; 

//DEFAULT SETTINGS

//query selector allows you to select elements on the page
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

function switchPlayer () {
    switch (activePlayer) {
        case 1:
            activePlayer = 0;
            console.log('Player 1');
            break;
        case 0:
            activePlayer = 1;
            console.log('Player 2');
            break;
    }
}

function updateGlobalScore () {
    var textScore = scores[activePlayer];
    textScore += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = textScore;
}

function resetRoundScore() {
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
}

var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';
//event is notification sent to the code that the webpage changed in some way.
//event listener waits for event and tells the code what to do with it.
//event can only be processed when the execution stack is empty
//message queue - all events are put in here and are waiting to be processed.
//each event listener is a function and gets its own execution context.
document.querySelector('.btn-roll').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6) + 1; 
    document.querySelector('#current-' + activePlayer).textContent = dice;
    if (dice === 1) {
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        switchPlayer();
    } else {
        roundScore += dice;
        switch (activePlayer) {
            case 0:
                document.querySelector('#current-0').textContent = roundScore;
                break;

            case 1:
                document.querySelector('#current-1').textContent = roundScore;
                break;
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
        //document.querySelector('#score-' + activePlayer).textContent = roundScore;
        updateGlobalScore();
        resetRoundScore();
        switchPlayer();
        console.log(scores);
});
console.log(scores);
//addEventListener(type of event, function that is called when event occurs)
//callback function: a function that is passed into another function as an argument and called by that other function

//can also make anonymous functions like this:
//document.querySelector('.btn-roll').addEventListener('click', function() {


//function goes here
