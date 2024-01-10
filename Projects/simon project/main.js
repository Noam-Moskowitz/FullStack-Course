let arrRound = [];
let gameCounter; // Game counter
let userCounter;

// Function (A)
// Resets the game and ready to play
// This does NOT start the game, you need to press a button to start the game
function initGame() {
    // console.clear();
    gameCounter = userCounter = 0;
    arrRound = [];
    console.log('Game initiated...');
}

// Function (B)
function playRound() {
    // 1. Create step and add as a last element to the array
    const newStep = createStep();
    arrRound.push(newStep);
    console.log(arrRound);

    // Deteremine that computer's turn is fininshed, and waiti for user input
    // ??

}

function userTurn(inpt) {
    let i = 0;
    console.log(inpt);
    // Compare input with
    if (inpt == arrRound[i]) {
        console.log('You guessed correctly');
        gameCounter++;
        i++;
        playRound();
    } else {
        console.log('You lose, game over');
        // initGame();
    }
}

// Function (C)
// 1. Creates a random number from 1 to 4
// 2. Returns the result and/or the color (צבע שמייצג את המספר)
function createStep() {
    const arrColors = [`red`, `green`, `blue`, `yellow`]
    return arrColors[Math.floor(Math.random() * 4)]
}

initGame();
document.getElementById('btnStart').addEventListener('click', playRound);
document.querySelector(`.gameButtons`).addEventListener(`click`, (event) => {
    userTurn(event.target.id);
})