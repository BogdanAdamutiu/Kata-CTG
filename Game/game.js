'use strict';

const manaslot = require('../Manaslot/factory.manaslot');

class Game {

    constructor(startingPlayer, otherPlayer) {
        this.startingPlayer = startingPlayer;
        this.otherPlayer = otherPlayer;
        this.activePlayer = this.startingPlayer;
        this.turn = 0;
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
        this.activePlayer.drawCard()
            .addManaslot(manaslot(this.turn, this.turn))
            .refillAllMana()
            .playCards(this.otherPlayer);

        this.switchActivePlayer();
    }

    startGame() {
        while (!this.endGame()) {
            this.takeTurn();
        }
    }

    switchActivePlayer() {
        if(this.activePlayer === this.startingPlayer) {
            this.activePlayer = this.otherPlayer;
        }
        else if(this.activePlayer === this.otherPlayer) {
            this.activePlayer = this.startingPlayer;
            this.turn++;
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

module.exports = Game;