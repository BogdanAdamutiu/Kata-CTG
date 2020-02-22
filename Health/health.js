'use strict';

class Health {

    constructor() {
        this.amount = 30;
    }

    getHealth() {
        return this.amount;
    }

    looseHealth(amount) {
        this.amount -= amount;
    }

    gainHealth(amount) {
        this.amount += amount;
    }
}

module.exports = Health;