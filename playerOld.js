'use strict';

class PlayerOld {

    constructor() {
        this.health = 30;
        this.manaslots = [];
        this.cards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    }

    addManaslot() {
        if (this.manaslots.length < 10) {
            this.manaslots.push(1);
        }

        return this.manaslots;
    }

    getAmountOfManaslots() {
        return this.manaslots.length;
    }

    useMana(mana) {
        let availableMana = 0;
        try {
            for (let i = 0; i < mana; i++) {
                if (this.manaslots[i] === 1) {
                    this.manaslots[i] = 0;
                    availableMana++;
                }
            }
            if (mana <= availableMana) {
                return this.manaslots;
            }
            else {
                throw new Error('Insufficient mana was available');
            }
        }
        catch (e) {
            throw new Error('Insufficient mana was available');
        }
    }

    refillMana() {
        return this.manaslots.map(x => 1);
    }

    getCardNumber() {
        return this.cards.length;
    }

    getHealth() {
        return this.health;
    }

    useDamageCard(damage) {
        this.health -= damage;
        return this.health;
    }
}

module.exports = () => PlayerOld;
