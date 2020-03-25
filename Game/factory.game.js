'use strict';

const Health = require('../Health/factory.health');
const Deck = require('../Deck/factory.deck');
const Manaslots = require('../Manaslots/factory.manaslots');
const Hand = require('../Hand/factory.hand');
const Player = require('../Player/factory.player');
const Game = require('./game');

module.exports = (health, maxManaslots, deck) => {
    const player1 = Player(Health(health), Manaslots(maxManaslots), Deck(deck), Hand());
    const player2 = Player(Health(health), Manaslots(maxManaslots), Deck(deck), Hand());

    return new Game(player1, player2);
};