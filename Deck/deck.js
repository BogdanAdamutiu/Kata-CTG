'use strict';

class Deck {

    constructor() {
        this.cards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    }

    drawCard() {
        let max = this.cards.length;
        return this.cards[Math.floor(Math.random(0, max))];
    }

}

module.exports = Deck;
