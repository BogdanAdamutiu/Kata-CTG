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
            return null;
        }

        return this.cards.shift();
    }

}

module.exports = PlayableHand;