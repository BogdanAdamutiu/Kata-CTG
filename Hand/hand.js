'use strict';

class Hand {

    constructor(playableHandFactory) {
        this.cards = [];
        this.playableHandFactory = playableHandFactory;
    }

    addToHand(card) {
        this.cards = this.cards.concat(card);
    }

    availableHand(amountOfMana) {
        const myPlayableCards = this.cards.filter(card => card.getDamage() <= amountOfMana);
        return this.playableHandFactory(myPlayableCards);
    }

    areCardsAvailable(amountOfMana) {
        return this.availableHand(amountOfMana).hasPlayableCards();
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