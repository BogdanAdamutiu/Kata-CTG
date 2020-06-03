'use strict';
const playableHand = require('../PlayableCards/factory.playableCards');
//TODO: check if this is correct

class Hand {

    constructor() {
        this.cards = [];
    }

    addToHand(card) {
        this.cards = this.cards.concat(card);
    }

    availableHand(amountOfMana) {
        const myPlayableCards = this.cards.filter(card => card.getDamage() <= amountOfMana);
        return playableHand(myPlayableCards);
    }

    removeCard(card) {
        for(let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].equals(card)) {
                this.cards.splice(i,1);
                return;
            }
        }

        console.log("You tried to remove an un-existent card from your hand");
        throw new Error("You tried to remove an un-existent card from your hand");
    }
}

module.exports = Hand;