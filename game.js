'use strict';

class Game {

    constructor(player1, player2) {
        this.playerOne = player1;
        this.playerTwo = player2;
    }

    start() {
        do {
            this.playerOne.useDamageCard(2);
            this.playerTwo.useDamageCard(3);
            console.log("This is player 1 health " + this.playerOne.getHealth());
            console.log("This is player 2 health " + this.playerTwo.getHealth());
        }
        while ((this.playerOne.getHealth() > 0) && (this.playerTwo.getHealth() > 0));
    }
}

const createInstanceOfPlayer = require('./playerOld');

module.exports = () => {
    const playerOne = createInstanceOfPlayer();
    const plsyerTwo = createInstanceOfPlayer();
    return new Game(playerOne, plsyerTwo);
};