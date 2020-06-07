'use strict';

const manaslot = require('../Manaslot/factory.manaslot');

class KataGame {

    constructor(startingPlayer, otherPlayer) {
        this.startingPlayer = startingPlayer;
        this.otherPlayer = otherPlayer;
        this.turn = 0;
        this.round = 0;
    }

    setupGame() {
        this.turn = 1;
        this.startingPlayer.drawCard()
            .drawCard()
            .drawCard();
        this.otherPlayer.drawCard()
            .drawCard()
            .drawCard()
            .drawCard();
    }

    takeTurn() {
        if(this.turn == 0) {
            this.startingPlayer.drawCard()
                .addManaslot(manaslot(this.round, this.round))
                .refillAllMana()
                .playCards(this.otherPlayer);
            this.turn = 1;
        }
        else if(this.turn == 1) {
            this.otherPlayer.drawCard()
                .addManaslot(manaslot(this.round, this.round))
                .refillAllMana()
                .playCards(this.startingPlayer);
            this.turn = 0;
            this.round++;
        }
    }

    startGame() {
        while (!this.endGame()) {
            this.takeTurn();
        }
    }

    endGame() {
        if(this.startingPlayer.getHealth() <= 0) {
            console.log('Other player is the winner');
            return true;
        }
        else if(this.otherPlayer.getHealth() <= 0) {
            console.log('Starting player is the winner');
            return true;
        }

        return false;
    }

}

module.exports = KataGame;