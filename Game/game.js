'use strict';

const manaSlot = require('../Manaslot/factory.manaslot');

class Game {

    constructor(startingPlayer, otherPlayer) {
        this.startingPlayer = startingPlayer;
        this.otherPlayer = otherPlayer;
        this.activePlayer = this.startingPlayer;
        this.turn = 0;
    }

    startGame() {
        this.turn = 1;
        this.startingPlayer.addToHand()
            .addToHand()
            .addToHand();
        this.otherPlayer.addToHand()
            .addToHand()
            .addToHand()
            .addToHand();
    }

    takeTurn() {
        this.activePlayer.addToHand()
            .addManaslot(manaSlot(this.turn, this.turn))
            .refillManaslot()
            .playCards(this.otherPlayer);

        this.switchActivePlayer();
    }

    switchActivePlayer() {
        if(this.activePlayer == this.startingPlayer) {
            this.activePlayer = this.otherPlayer;
        }
        else if(this.activePlayer == this.otherPlayer) {
            this.activePlayer = this.startingPlayer;
            this.turn++;
        }
    }

    endGame() {
        if(this.startingPlayer.getHealth() <= 0) {
            console.log('Other player is the winner');
        }
        else if(this.otherPlayer.getHealth() <= 0) {
            console.log('Starting player is the winner');
        }
    }

}

module.exports = Game;
