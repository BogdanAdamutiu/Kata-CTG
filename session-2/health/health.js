'use strict';

class Health {
  constructor() {
    this.amount = 60;
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