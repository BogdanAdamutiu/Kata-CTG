'use strict';

const Health = require('../Health/factory.health');
const Deck = require('../Deck/factory.deck');
const Manaslots = require('../Manaslots/factory.manaslots');
const Hand = require('../Hand/factory.hand');
const Player = require('./player');

module.exports = (health, manaslots, deck, hand) =>
    new Player(Health(health), Manaslots(manaslots), Deck(deck), Hand(hand));
