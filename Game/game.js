'use strict';

class Game {

    constructor(startingPlayer, otherPlayer) {
        this.startingPlayer = startingPlayer;
        this.otherPlayer = otherPlayer;
        this.activePlayer = this.startingPlayer;
    }

    startGame() {
        this.startingPlayer.addToHand()
            .addToHand()
            .addToHand();
        this.otherPlayer.addToHand()
            .addToHand()
            .addToHand()
            .addToHand();
    }

    takeTurn(turn) {
        this.activePlayer.addToHand()
            .addManaslot(turn)
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

