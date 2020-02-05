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
        this.deck = [0, 0, 1];
        this.hand = [10];
    }

    receiveManaslot() {
        if (this.manaslots.length < 3) {
            this.manaslots.push(1);
        }

        return this.manaslots;
    }

    // possible ways to deal with control flow:
    // - 1. use expection to make clear, insufficient mana was available
    // - 2. use status returns, with clarification (return an object)
    // - 3. return true/false, log additional information
    receiveMana() {
        for(let i = 0; i < this.manaslots.length; i++) {
            if (this.manaslots[i] === 0) {
                this.manaslots[i] = 1;
                console.log({ status: true, manaslotUsed: i });
                return true;
            }
        }

        console.log({ status: false, msg: 'no empty manaslots found' });
        return false;
    }

    // possible ways to deal with control flow:
    // - 1. use expection to make clear, insufficient mana was available
    // - 2. use status returns, with clarification (return an object)
    // - 3. return true/false, log additional information
    useMana() {
        for(let i = 0; i < this.manaslots.length; i++) {
            if (this.manaslots[i] === 1) {
                this.manaslots[i] = 0;
                console.log({ status: true, manaslotUsed: i });
                return true;
            }
        }

        console.log({ status: false, msg: 'no manaslots with mana or no sufficient mana' });
        return false;
    }

    receiveDamage(damage) {
        if (damage < 0) {
            console.log({ status: false, msg: 'will not hurt a player if damage is negative' });
            return false;
        }

        this.health -= damage;
        return this.health;
    }

    receiveHealing(health) {
        if (health < 0) {
            console.log({ status: false, msg: 'will not heal a negative amount of health to player' });
            return false;
        }

        this.health += health;
        return this.health;
    }

    drawCard() {
        if (this.deck.length) {
            this.hand.push(this.deck.shift());
            return true;
        }

        console.log({ status: false, msg: 'will not draw a card, my deck ran out of cards' });
        return false;
    }

    playCard(opponent) {
        if (this.hand.length) {
            if (this.useMana()) {
                const card = this.hand.shift();
                opponent.receiveDamage(card);
                return true;
            }

            console.log({ status: false, msg: 'ran out of mana to play a card' });
            return false;
        }

        console.log({ status: false, msg: 'no cards left in hand to play' });
        return false;
    }

}

module.exports = () => new Player();
