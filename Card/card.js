'use strict';

class Card {

    constructor(id, value) {
        this.id = id;
        this.value = value;
    }

    equals(card) {
        if (card instanceof Card) {
            return card.getId() === this.id;
        }

        throw new TypeError("Card in not an instance of card");
    }

    getId() {
        return this.id;
    }

    getDamage() {
        return this.value;
    }

}

module.exports = Card;