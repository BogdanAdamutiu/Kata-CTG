'use strict';

class Game {

    constructor() {}

    const player1 = require('./player')();
    const player2 = require('./player')();

    do {
        player1.useDamageCard(2);
        player2.useDamageCard(3);
        console.log("This is player 1 health " + player1.getHealth());
        console.log("This is player 2 health " + player2.getHealth());
    } while (player1.getHealth() > 0 && player2.getHealth() > 0);

}

module.exports = () => new Game();