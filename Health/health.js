'use strict';

class Health {

    constructor(health) {
        this.amount = health;
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
