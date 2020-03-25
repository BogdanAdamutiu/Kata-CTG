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

    addManaslot(manaslot) {
        this.manaslots.addManaslot(manaslot);
    }

    drawCard() {
        if(this.deck.hasCards()) {
            this.hand.addToHand(this.deck.drawRandomCard());
            return this;
        }
    }

    playCards(opponent) {
        while (this.hand.hasPlayableCards() > 0 && (this.hand.availableHand(this.manaslots.availableMana()) > 0)) {
            let card = this.hand.availableHand(this.manaslots.availableMana()).takeCard();
            opponent.sustainDamage(card.value);
            this.manaslots.useManaFromManaslots(card.value);
            this.hand.removeCard(card);
        }

        return this;
    }

    refillAllMana() {
        this.manaslots.refillManaOfManaslots();
        return this;
    }
}

module.exports = Player;