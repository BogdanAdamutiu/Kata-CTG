'use strict';

//TODO: Make sure this implementation is correct! I think here I should have the factories
const Player = require('./player');

module.exports = (health, manaslots, deck, hand) =>
    new Player(health, manaslots, deck, hand);
