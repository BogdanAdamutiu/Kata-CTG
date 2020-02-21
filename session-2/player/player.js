'use strict';

class Player {
  constructor(health) {
    this.health = health;
    this.mana = 0;
    this.manaSlots = 0;
    // this.deck = [ 0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8 ];
  }
  getHealth() {
    return this.health.getHealth();
  }
  sufferDamage(amount) {
    this.health.looseHealth(amount);
  }
  healDamage(amount) {
    this.health.gainHealth(amount);
  }
  getMana() {
    return this.mana;
  }
  getManaslots() {
    return this.manaSlots;
  }
  addManaslot() {
    this.manaSlots += 1;
  }
}

module.exports = Player;