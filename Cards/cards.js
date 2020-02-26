'use strict';

class Cards {

    constructor() {
        this.cards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    }

    getCards() {
        return this.cards;
    }

    playDamageCard() {
        let max = this.cards.length;
        let card = this.cards[Math.floor(Math.random(0,max) * 10)];
        this.cards.splice(card,1);
        return card;
    }
}

module.exports = Cards;