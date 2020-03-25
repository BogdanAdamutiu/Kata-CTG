'use strict';

class PlayableCards {

    constructor(cards) {
        this.cards = cards;
    }

    hasPlayableCards() {
        return this.cards.length > 0;
    }

    takeCard() {
        if (this.cards.length === 0) {
            console.log("You tried to take a card from empty playable cards");
            throw new Error("You tried to take a card from empty playable cards");
        }

        return this.cards.shift();
    }

}

module.exports = PlayableCards;