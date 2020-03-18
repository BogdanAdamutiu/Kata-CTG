'use strict';

class PlayableHand {

    constructor(cards) {
        this.cards = cards;
    }

    hasPlayableCards() {
        return this.cards.length > 0;
    }

    takeCard() {
        if (this.cards.length === 0) {
            console.log("You tried to take a card from an empty playable cards");
            throw new Error("You tried to take a card from an empty playable cards");
        }

        return this.cards.shift();
    }

}

module.exports = PlayableHand;