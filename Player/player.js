'use strict';

class Player {

    constructor(heath) {
        this.health = health;
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
}

module.exports = Player;