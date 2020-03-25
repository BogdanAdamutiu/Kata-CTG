'use strict';

class Deck {

    constructor(cards) {
        this.cards = cards;
    }

    drawRandomCard() {
        if(this.cards.length > 0) {
            return this.cards.splice(Math.floor(Math.random()*this.cards.length), 1);
        }

        console.log('You tried to draw a card from an empty deck');
        throw new Error("You tried to draw a card from an empty deck");
    }

    hasCards() {
        return this.cards.length;
    }

}

module.exports = Deck;