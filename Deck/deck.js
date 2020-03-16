'use strict';

class Deck {

    constructor(cards) {
        this.cards = cards;
    }

    drawCard() {
        if(this.cards.length > 0) {
            return this.cards.splice(Math.floor(Math.random()*this.cards.length), 1);
        }

        //TODO: Throw error if there are no more cards or something else
        console.log('There are no more cards in the deck');
        return null;
    }

}

module.exports = Deck;
