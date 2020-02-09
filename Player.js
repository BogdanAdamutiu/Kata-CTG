'use strict';

// Recipe for simple code creation (dont bother about fancy stuff)
// 1. find nouns in story
// 2. find verbs in story
// 3. find initial values in story for nouns
// 4. find noun with least amount of dependencies, make this your first class
// 5. add initial values to noun, bases on step 3
// 6. add simplest verb associated with noun to class, as a function
// 7. repeat 6 until you have all the verbs put into function for the noun
// 8. find the next noun with the least amount of dependencies, and repeast from step 5 ... rinse & repeat

class Player {

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

    // possible ways to deal with control flow:
    // - 1. use expection to make clear, insufficient mana was available
    // - 2. use status returns, with clarification (return an object)
    // - 3. return true/false, log additional information
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
}

module.exports = () => new Player();
