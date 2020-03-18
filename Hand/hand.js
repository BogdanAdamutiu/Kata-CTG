'use strict';

class Hand {

    constructor() {
        this.cards = [];
    }

    addToHand(card) {
        this.cards.push(card);
    }

    availableHand(amountOfMana) {
        const playableCards = this.cards.filter(card => card.getDamage() <= amountOfMana);
        return new PlayableHand(playableCards);
    }

    removeCard(card) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].equals(card)) {
                this.cards.splice(i,1);
            }
        }

        console.log("You tried to remove an inexisting card from your hand");
        throw new Error("You tried to remove an inexisting card from your hand");
    }
}

module.exports = Hand;