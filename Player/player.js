'use strict';

class Player {

    constructor(health, manaslots, deck, hand) {
        this.health = health;
        this.manaslots = manaslots;
        this.deck = deck;
        this.hand = hand;
    }

    getHealth() {
        return this.health.getHealth();
    }

    sustainDamage(damage) {
        return this.health.looseHealth(damage);
    }

    healDamage(damage) {
        return this.health.gainHealth(damage);
    }

    getHand() {
        return this.hand.cards;
    }

    addManaslot(manaslot) {
        this.manaslots.addManaslot(manaslot);
    }

    addToHand() {
        this.hand.addToHand(this.drawCard());
    }

    getAvailableCards(totalMana) {
        return this.hand.availableHand(totalMana);
    }

    hasPlayableCards() {
        return this.hand.hasPlayableCards();
    }

    drawCard() {
        return this.deck.drawCard();
    }

    takeCard() {
        return this.getAvailableCards().takeCard();
    }

    playCards(opponent) {
        do {
            let card = this.takeCard();
            opponent.sustainDamage(card.value);
            this.hand.removeCard(card);
            //TODO: reduce available mana

        } while (this.hasPlayableCards() > 0)
    }
}

module.exports = Player;