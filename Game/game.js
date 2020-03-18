'use strict';

const manaSlot = require('../Manaslot/factory.manaslot');

class Game {

    constructor(startingPlayer, otherPlayer, deck, health, maxManaslots) {
        this.startingPlayer = startingPlayer;
        this.otherPlayer = otherPlayer;
        this.deck = deck;
        this.health = health;
        this.maxManaslots = maxManaslots;
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
            .refillManaslots()
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
