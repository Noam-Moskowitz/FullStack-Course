let arrRound = [];
let arrPlayer=[];
let gameCounter;
let userCounter;
    let i=0;


function initGame() {
    console.clear();
    gameCounter = userCounter = 1;
    arrPlayer=[];
    arrRound = [];
    console.log(`Initiating Game...`);
}

function playRound() {
    presentColor()
   
    
    
}

function createStep() {
    const arrColors=[`red`,`green`,`blue`,`yellow`]
    return arrColors[Math.floor(Math.random()*4)]
}
function presentColor(){
    for(color of arrRound){
        console.log(color);
        setTimeout(()=>,500)
    document.getElementById(color).style.opacity=`1`;
    setTimeout(()=>{
        document.getElementById(color).style.opacity=`.5`;
    },600)
    }
}

function eventHandler() {
    initGame();
    arrRound.push(createStep())
    playRound()
}
document.addEventListener(`click`,(event)=>{
    if(event.target.id!=`btn`){
    arrPlayer.push(event.target.id);
    console.log(arrPlayer);
     for(move of arrPlayer){
        if(move == arrRound[i]){
             arrRound.push(createStep())
             console.log(arrRound);
             playRound()

        } else{
            console.log(`loser`);
        }
    }
    }
})
document.getElementById(`btn`).addEventListener(`click`, eventHandler);
