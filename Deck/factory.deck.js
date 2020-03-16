'use strict';

const Deck = require('./deck');
const Card = require('../Card/factory.card');

module.exports = cards => {
    const deckOfCards = cards.map(x => Card(x));
    return new Deck(deckOfCards);
};
