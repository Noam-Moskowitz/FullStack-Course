let arrRound = [];
let gameCounter;
let userCounter;

function initGame() {
    console.clear();
    gameCounter = userCounter = 1
    arrRound = [];
    console.log(`Initiating Game...`);
}

function eventHandler() {
    initGame();
}

document.getElementById(`btn`).addEventListener(`click`, eventHandler);
