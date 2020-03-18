'use strict';

class Manaslot {

    constructor(size, amount) {
        this.size = size;
        this.amount = amount;
    }

    getSize() {
        return this.size;
    }

    getAmount() {
        return this.amount;
    }

    refillManaslot() {
        this.amount = this.size;
    }

    useMana(amount) {
        this.amount -= amount;
    }

}

module.exports = Manaslot;
