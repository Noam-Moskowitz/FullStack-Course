class SportsEvent {
    name;
    playerAmout;
    nextGame;
    constructor(name) {
        this.name = name;
    }

    printVariable() {
        let vStr = `
        Event: ${this.name}
        Player Amount: ${this.playerAmout}
        Closest Game: ${this.nextGame}
        `
        alert(vStr)
    }
};

class Athletics extends SportsEvent {

}
class Swimming extends SportsEvent {
    lapAmount;

}