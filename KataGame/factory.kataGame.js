'use strict';

const Health = require('../Health/factory.health');
const Deck = require('../Deck/factory.deck');
const Manaslots = require('../Manaslots/factory.manaslots');
const Hand = require('../Hand/factory.hand');
const Player = require('../Player/factory.player');
const KataCardGame = require('./kataGame');

module.exports = (health, maxManaslots, cards) => {
    const player1 = Player(Health(health), Manaslots(maxManaslots), Deck(cards), Hand());
    const player2 = Player(Health(health), Manaslots(maxManaslots), Deck(cards), Hand());

    return new KataCardGame(player1, player2);
};