'use strict';

class Player {

    constructor(health) {
        this.health = health;
    }

    getHealth() {
        return this.health.getHealth();
    }

    sustainDamage(damage) {
        return this.health.looseHealth(damage);
    }

    addManaslot(manaslot) {
        this.manaslots.addManaslot(manaslot);
    }

    drawCard() {
        this.hand.addToHand(this.deck.drawRandomCard());
        return this;
    }

    playCards(opponent) {

            while (this.hand.hasPlayableCards() > 0 && (this.hand.getAvailableCards(this.manaslots.availableMana()) > 0)) {
                let card = this.hand.getAvailableCards(this.manaslots.availableMana()).takeCard();
                opponent.sustainDamage(card.value);
                this.manaslots.useManaslots(card.value);
                this.hand.removeCard(card);
            }

            return this;
    }

    refillAllMana() {
        this.manaslots.refillManaslot();
        return this;
    }
}

module.exports = Player;