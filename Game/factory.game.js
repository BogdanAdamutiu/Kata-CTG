'use strict';

const Health = require('../Health/factory.health');
const Deck = require('../Deck/factory.deck');
const Manaslots = require('../Manaslots/factory.manaslots');
const Hand = require('../Hand/factory.hand');
const Player = require('../Player/factory.player');
const Game = require('./game');

const kataGameCards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
const kataGameHealth = 30;
const kataGameMaxManaslots = 10;

module.exports = (player1, player2) => {
    const deck = Deck(kataGameCards);
    const health = Health(kataGameHealth);
    player1 = Player(health, Manaslots(kataGameMaxManaslots), deck, Hand());
    player2 = Player(health, Manaslots(kataGameMaxManaslots), deck, Hand());

    return new Game(player1, player2);
};




