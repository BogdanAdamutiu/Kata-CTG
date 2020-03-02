'use strict';

const Deck = require('./deck');
const Card = require('../Card/factory.card');
const cardsValue = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];

module.exports = () => {
    let i = 0;
    const cards = [];
    cards.map(x => new Card(cardsValue[i++]));

    return new Deck(cards);
};
