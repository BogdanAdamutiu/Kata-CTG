'use strict';

const Player = require('./player');

module.exports = (health, manaslots, deck, hand) =>
    new Player(health, manaslots, deck, hand);
